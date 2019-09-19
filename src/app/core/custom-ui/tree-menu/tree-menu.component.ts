import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MenuItem } from '../../common/menu-item';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        display: 'block',
        opacity: '1'
      })),
      state('hide', style({
        display: 'none',
        opacity: '0.5'
      })),
      transition('show => hide', [
        animate('250ms')
      ]),
      transition('hide => show', [
        animate('250ms')
      ]),
    ]),
  ]
})
export class TreeMenuComponent implements OnInit {

  @Input() isShrinked: boolean;
  @Input() menus: Array<MenuItem>;

  constructor() {
    this.isShrinked = false;
    this.menus = [];
  }

  ngOnInit() {
  }

  /**
   * click事件处理
   * @param event 事件对象
   * @param item 菜单对象
   */
  public itemClick(event: Event, item: MenuItem) {
    if (item.hasChild) {
      item.expanded = !item.expanded;
    }
  }

  /**
   * mouseenter事件处理
   * @param event 事件对象
   * @param item 菜单对象
   */
  public itemMouseEnter(event: Event, item: MenuItem) {
    if (this.isShrinked) {
      item.cache_expanded = item.expanded; // 保存mousehover事件发生前菜单伸缩状态
      item.expanded = true;
    }
  }

  /**
   * mouseleave事件处理
   * @param event 事件对象
   * @param item 菜单对象
   */
  public itemMouseLeave(event: Event, item: MenuItem) {
    if (this.isShrinked) {
      item.expanded = item.cache_expanded; // 恢复mousehover事件发生前菜单伸缩状态
      delete item.cache_expanded;
    }
  }

}
