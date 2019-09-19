import { Injectable } from '@angular/core';
import { HttpReqService } from '../../http-req.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpReqService: HttpReqService) { }

  /**
   * 请求菜单数据
   */
  public getMenus() {
    return this.httpReqService.getMethod('menu');
  }
}
