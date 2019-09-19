import { WPageModel } from './w-page-model';
import { Table } from 'primeng/table';
import { HttpReqService } from '../../http-req.service';

interface Col {
  field?: string;
  header?: string;
  pipe?: string;
}

interface TableArg {
  pm?: WPageModel; // 分页模型
  url?: string; // 数据请求地址
  method?: string; // 请求方法
  value?: Array<any> | any; // 数据
  cols?: Array<Col>; // 表头
  params?: any; // 查询参数
  selection?: any; // 选中的行
  fromBack?: boolean; // 是否从后端拿数据
}

export class WTable {

  public fromBack: boolean;
  public pm: WPageModel;
  public url: string;
  public method: string;
  public value: Array<any> | any;
  public cols: Array<Col>;
  public params: any;
  public selection: any;

  constructor(public arg: TableArg, public ajaxService?: HttpReqService) {
    this.pm = arg.pm || new WPageModel();
    this.url = arg.url || '';
    this.method = arg.method || 'POST';
    this.value = arg.value || [];
    this.cols = arg.cols || [];
    this.params = arg.params || {};
    this.fromBack = arg.fromBack === false ? arg.fromBack : true;
  }

  /**
   * 查询
   * @param param 查询参数
   * @param tb 表格组件
   */
  public query(param?: {}, tb?: Table) {
    this.pm.pageNo = 1;
    this.params = param;
    this.loadData(tb);
  }

  /**
   * 加载数据
   * @param tb 表格组件
   */
  public loadData(tb?: Table) {
    switch (this.method) {
      case 'POST':
        this.ajaxService.postMethod(this.url, this.paramsMerge())
          .subscribe(res => {
            if (this.fromBack) {
              this.sucessFn(res, tb);
            } else {
              this.json_sucessFn(res, tb);
            }
          });
        break;
      default:
        this.ajaxService.getMethod(this.url, this.paramsMerge())
          .subscribe(res => {
            if (this.fromBack) {
              this.sucessFn(res, tb);
            } else {
              this.json_sucessFn(res, tb);
            }
          });
    }

  }

  /**
   * 请求成功后数据处理,静态数据
   * @param res 响应
   * @param tb  表格组件
   */
  private json_sucessFn(res: any, tb?: Table) {
    const value = res.rows.filter(ele => {// 模拟搜索
      let isReturn = true;
      if (this.params.searchText) {
        isReturn = JSON.stringify(ele).includes(this.params.searchText);
      }
      return isReturn;
    });
    const pageNo = this.pm.pageNo;
    const pageSize = this.pm.pageSize;
    const total = value.length;
    const start = (pageNo - 1) * pageSize;
    const end = pageNo * pageSize > total ? total : pageNo * pageSize;
    this.value = value.slice(start, end);
    this.pm.pageNo = pageNo; // 当前页
    this.pm.pageSize = pageSize; // 每页大小
    this.pm.total = total; // 总记录数
    this.pm.totalPage = total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1;
    this.pm.toPage = null;
    this.selection = null;
    if (tb) {
      tb.first = (pageNo - 1) * pageSize;
    }
  }

  /**
   * 请求成功后数据处理,动态数据
   * @param res 响应
   * @param tb  表格组件
   */
  private sucessFn(res: any, tb?: Table) {
    const pageNo = res.pageNo;
    const pageSize = res.pageSize;
    const total = res.total;
    this.value = res.rows;
    this.pm.pageNo = pageNo; // 当前页
    this.pm.pageSize = pageSize; // 每页大小
    this.pm.total = total; // 总记录数
    this.pm.totalPage = total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1;
    this.pm.toPage = null;
    this.selection = null;
    if (tb) {
      tb.first = (pageNo - 1) * pageSize;
    }
  }

  /**
   * 参数合并
   */
  private paramsMerge() {
    let params = this.params ? this.params : {};
    params = Object.assign(params, {
      pageNo: this.pm.pageNo,
      pageSize: this.pm.pageSize
    });
    return params;
  }

  /**
   * 翻页处理
   * @param $event 翻页事件
   */
  public onPage($event) {
    this.pm.pageNo = Math.ceil(($event.first + 1) / $event.rows);
    this.pm.pageSize = $event.rows;
    this.loadData();
  }

  /**
   * 页码跳转
   * @param $event keypress 事件
   * @param tb 表格组件
   */
  public gotoPage($event, tb: Table) {
    if ($event.keyCode === 13) {
      if (this.pm.toPage > this.pm.totalPage) {
        this.pm.toPage = this.pm.totalPage;
      }
      this.pm.pageNo = this.pm.toPage;
      this.pm.pageSize = this.pm.pageSize;
      this.loadData(tb);
    }
  }
}

