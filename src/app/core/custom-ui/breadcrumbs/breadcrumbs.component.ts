import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadcrumbsItem } from '../../common/breadcrumbs-item';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: BreadcrumbsItem[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.init();
  }

  ngOnInit() {
  }

  private init() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).
      subscribe(event => {
        this.breadcrumbs = [];
        const currentRoute = this.route.root;
        const url = '';
        this.getBreadcrumbs(currentRoute, url, this.breadcrumbs);

      });
  }

  /**
   * 获取面包屑
   * @param route 路由对象
   * @param url 路由链接
   * @param breadcrumbs 面包屑数据
   */
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbsItem[]) {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== 'primary') {
        continue;
      }

      const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeUrl}`;

      if (child.snapshot.data.title) {
        this.breadcrumbs.push({
          label: child.snapshot.data.title,
          url: url.replace('//', '/')
        });
      }

      // 递归调用
      return this.getBreadcrumbs(child, url, breadcrumbs);

    }

    return this.breadcrumbs;

  }

}
