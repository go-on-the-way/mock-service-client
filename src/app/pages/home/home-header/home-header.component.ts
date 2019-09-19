import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  public appUrl: string; // 系统首页路由
  public appName: string; // 系统名
  public appLogo: string; // 系统 LOGO路径
  public userName: string; // 用户名
  @Output() exitEvt = new EventEmitter<any>();

  constructor(private appService: AppService) {
    this.appName = appService.appContext.appName;
    this.appLogo = appService.appContext.homeLogo;
    this.appUrl = '/home/';
    this.userName = 'admin';
  }

  ngOnInit() {

  }

  /**
   * 退出系统
   */
  public logout() {
    this.exitEvt.emit();
  }

}
