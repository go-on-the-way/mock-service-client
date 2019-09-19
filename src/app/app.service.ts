import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';

interface AppContext {
  appName?: string; // 系统名称
  appVersion?: string; // 系统版本
  loginLogo?: string; // 系统登录页Logo
  homeLogo?: string; // 系统主页Logo
}

interface HttpInfo {
  baseUrl?: string; // http请求地址
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  static httpInfo: HttpInfo;
  public appContext: AppContext;

  constructor(
    private httpClient: HttpClient,
    private confirmationService: ConfirmationService
  ) { }

  /**
   * 初始化http请求信息
   */
  public initHttpInfo() {
    this.httpClient.get('assets/json/http.config.json').subscribe(res => {
      AppService.httpInfo = res;
    });
  }

  /**
   * 初始化应用上下文信息
   */
  public initAppContext() {
    this.httpClient.get('assets/json/app.context.config.json').subscribe(res => {
      this.appContext = res;
    });
  }

  public pop() {
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
