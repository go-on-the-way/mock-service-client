import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../../http-req.service'

@Component({
  selector: 'app-sys-dict',
  templateUrl: './sys-dict.component.html',
  styleUrls: ['./sys-dict.component.scss']
})
export class SysDictComponent implements OnInit {

  public formModel: {} = {};
  public updateModel: {} = {};
  public serachModel: {} = {};
  public list: Array<any>;

  constructor(private httpReqService: HttpReqService) {
    this.list = [];
  }

  ngOnInit() {
    this.search();
  }

  /**
   * 新增数据
   */
  public add() {
    this.httpReqService.postMethod('saveData', this.formModel).subscribe(data => {
      this.search();
    });
  }

  /**
   * 搜索数据
   */
  public search() {
    this.httpReqService.postMethod('searchData', this.serachModel).subscribe(res => {
      if (res.status) {
        this.list = res.datas;
      }
    });
  }

  /**
   * 删除
   * @param data 要删除的数据
   */
  public delete(data) {
    this.httpReqService.postMethod('deleteData', {
      url: data.url
    }).subscribe(res => {
      if (res.status) {
        this.search();
      }
    });
  }

  /**
   * 更新
   * @param data 要更新的数据
   */
  public update() {
    this.httpReqService.postMethod('updateData', this.updateModel).subscribe(res => {
      if (res.status) {
        this.search();
      }
    });
  }

  /**
   * 更新按钮点击事件处理
   * @param data 要更新的数据
   */
  public updateClick(data) {
    this.updateModel = { ...data };
  }

}
