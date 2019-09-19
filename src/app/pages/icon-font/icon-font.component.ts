import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-font',
  templateUrl: './icon-font.component.html',
  styleUrls: ['./icon-font.component.scss']
})
export class IconFontComponent implements OnInit {

  public iframeUrl: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    const src = 'assets/iconfont/icon-font.html';
    this.iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
