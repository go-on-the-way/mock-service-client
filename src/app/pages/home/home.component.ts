import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { LoginService } from '../login/login.service';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuModel$: Observable<any>;
  public shrinked: boolean; // 侧边栏收缩标识
  public appVersion: string; // app版本

  constructor(
    private appService: AppService,
    private loginService: LoginService,
    private homeService: HomeService
  ) {
    this.menuModel$ = Observable.create((observer) => {
      observer.next([{
        label: '首页',
        icon: 'menu-home',
        routerLink: 'home/index',
        expanded: true,
        children: []
      }]);
    });
    this.shrinked = false;
  }

  ngOnInit() {
    this.menuModel$ = this.homeService.getMenus();
    this.appVersion = this.appService.appContext.appVersion;
  }

  /**
   * 侧边栏切换处理
   */
  public toggleSiderbar() {
    this.shrinked = !this.shrinked;
  }

  /**
   * 退出系统
   */
  public exit() {
    this.loginService.logout();
  }

}
