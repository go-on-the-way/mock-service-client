import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss']
})
export class ScrollContainerComponent implements OnInit, AfterViewInit {

  private scroll: any;
  @Input() maxHeight: string; // px/%

  constructor(private el: ElementRef) {
    this.maxHeight = '400px';
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.scroll = this.initScroll();
  }

  /**
   * 初始化滚动条
   */
  public initScroll() {
    return new BScroll(this.el.nativeElement.querySelector('.scroll-wrapper'), {
      preventDefault: false,
      scrollbar: {
        fade: true
      },
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      }
    });
  }

  /**
   * 重新计算 better-scroll
   */
  public refresh() {
    if (this.scroll) {
      this.scroll.refresh();
    }
  }

  /**
   * 销毁 better-scroll
   */
  public destroy() {
    this.scroll.destroy();
  }

}
