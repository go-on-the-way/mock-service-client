import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { WToolbarComponent } from './w-toolbar/w-toolbar.component';

@NgModule({
  declarations: [
    ScrollContainerComponent,
    TreeMenuComponent,
    BreadcrumbsComponent,
    WToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ScrollContainerComponent,
    TreeMenuComponent,
    BreadcrumbsComponent,
    WToolbarComponent
  ]
})
export class CustomModule { }
