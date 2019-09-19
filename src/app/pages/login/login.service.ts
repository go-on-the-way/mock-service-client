import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router: Router) { }

  /**
   * 登录
   */
  public login() {
    this.router.navigateByUrl('/home');
  }

  /**
   * 注销
   */
  public logout() {
    this.router.navigateByUrl('/login');
  }

}
