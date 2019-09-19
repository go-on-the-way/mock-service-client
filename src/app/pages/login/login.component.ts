import { Component, Renderer2, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { AppService } from '../../app.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  public appName: string;
  public appVersion: string;
  public loginLogo: string;
  public welcomeText: string;
  public loginContentH: number; // 登录界面内容高度值
  public userName: string; // 用户名
  public password: string; // 密码

  constructor(
    public el: ElementRef,
    public renderer2: Renderer2,
    public appService: AppService,
    public loginService: LoginService
  ) {
    this.loginContentH = 0;
    this.appName = appService.appContext.appName;
    this.appVersion = appService.appContext.appVersion;
    this.loginLogo = appService.appContext.loginLogo;
    this.welcomeText = '欢迎登录系统';
    this.userName = '';
    this.password = '';
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.calculateLayout();
    });
  }

  /**
   * 计算布局
   */
  public calculateLayout() {
    const loginDom = this.el.nativeElement;
    const loginHeaderH = loginDom.querySelector('.login-header').clientHeight;
    const loginFooterH = loginDom.querySelector('.login-footer').clientHeight;
    this.loginContentH = window.innerHeight - loginHeaderH - loginFooterH;
  }

  /**
   * 系统登录
   */
  public doLogin(): void {
    this.loginService.login();
  }

}
