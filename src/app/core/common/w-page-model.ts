interface PageModelArg {
  pageNo?: number;
  pageList?: Array<number>;
  pageLinkSize?: number;
}

export class WPageModel {
  reqPageNo: number; // 请求码
  reqPageSize: number; // 请求页面大小
  toPage: number;                // 跳转的页码
  pageLinkSize: number;        // p-dataTable组件分页pageLinks参数配置
  pageList: Array<number>;     // p-dataTable组件可选的每页数据条数配置
  pageNo: number;              // 响应的页码，对应response数据的pageNo
  pageSize: number;            // 响应的每页数据条数，对应response数据的pageSize
  total: number;               // 数据库存储的数据总条数，对应response数据的total
  totalPage: number;           // 总共的页数

  constructor(arg?: PageModelArg) {
    if (arg) {
      this.pageList = arg.pageList || [10, 20, 30, 40, 50];
      this.pageNo = arg.pageNo || 1;
      this.pageSize = this.pageList[0];
      this.pageLinkSize = arg.pageLinkSize || 10;
    } else {
      this.pageList = [10, 20, 30, 40, 50];
      this.pageNo = 1;
      this.pageSize = this.pageList[0];
      this.pageLinkSize = 10;
    }
  }
}
