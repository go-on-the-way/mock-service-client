import { Injectable } from '@angular/core';
import {
  CanActivate, // 守卫，处理导航到某路由的情况。
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class RouterGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
