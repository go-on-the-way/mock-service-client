import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { title: '' },
    children: [
      {
        path: 'dict',
        loadChildren: 'src/app/pages/home/sys-manage/sys-dict/sys-dict.module#SysDictModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysManageRoutingModule { }
