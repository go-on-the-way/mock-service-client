import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        data: { title: '首页' },
        loadChildren: 'src/app/pages/home/index/index.module#IndexModule'
      },
      {
        path: 'sysManage',
        data: { title: '系统管理' },
        loadChildren: 'src/app/pages/home/sys-manage/sys-manage.module#SysManageModule'
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
