import { Component, OnInit, OnChanges, NgZone, ViewChild, AfterViewInit, AfterViewChecked, } from '@angular/core';
import { WTable } from '../../core/common/w-table';
import { WPageModel } from '../../core/common/w-page-model';
import { HttpReqService } from '../../http-req.service';
import { AppService } from '../../app.service';
import { ScrollContainerComponent } from '../../core/custom-ui/scroll-container/scroll-container.component';
declare var $: any;
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {

  public dt: WTable;
  public searchText: string; // 表格搜索字段
  public scrollData: Array<string>;
  public layoutItems: Array<any>; // 布局模块
  public grid: any;
  public timerId: any;
  @ViewChild('scrollContent') scrollContent: ScrollContainerComponent;

  constructor(
    private httpReqService: HttpReqService,
    private confirmationService: ConfirmationService,
    private appService: AppService,
    public zone: NgZone
  ) {
    // 表格实例化
    this.dt = new WTable({
      url: 'table',
      method: 'GET',
      fromBack: false,
      cols: [{
        field: 'ck',
        header: ''
      }, {
        field: 'name1',
        header: '名称1'
      }, {
        field: 'name2',
        header: '名称2'
      }, {
        field: 'name3',
        header: '名称3'
      }, {
        field: 'name4',
        header: '名称4'
      }, {
        field: 'operator',
        header: '操作'
      }],
      pm: new WPageModel({
        pageNo: 1,
        pageList: [1, 3, 5, 7, 9, 10]
      })
    }, httpReqService);

    // 滚动条区域
    this.scrollData = [];
    this.layoutItems = [];
  }

  ngOnInit() {
    // 表格数据加载
    this.dt.loadData();
    this.timerId = setInterval(() => {
      if (this.scrollData.length > 20) {
        this.scrollData.length = 0;
      }
      this.scrollData.push('1');
    }, 500);
  }

  ngAfterViewInit() {
    this.grid = $('.gridster ul').gridster({
      widget_base_dimensions: ['auto', 100],
      autogenerate_stylesheet: true,
      min_cols: 1,
      max_cols: 12,
      widget_margins: [5, 5],
      resize: {
        enabled: true
      },
      draggable: {
        stop(event, ui) {
          console.log(event, ui);
        }
      }
    }).data('gridster');
  }

  ngAfterViewChecked() {

  }

  ngOnChanges() {
    this.zone.runOutsideAngular(() => {
      this.scrollContent.refresh();
    });
  }

  /**
   * 表格搜索
   */
  public btnSearch(pTable) {
    this.dt.query(
      {
        searchText: this.searchText
      },
      pTable
    );
  }

  /**
   * 增加拖拽模块
   */
  public addItem() {
    this.grid.add_widget(`<li data-type="1"></li>`, 1, 1, 1, 1);
  }

  public pop() {
    // this.appService.pop();
    this.confirmationService.confirm({
      header: '确认',
      message: '您确认要.....？',
      icon: 'pi pi-exclamation-triangle',
      rejectVisible: true,
      accept: () => {

      }
    });
  }

}
