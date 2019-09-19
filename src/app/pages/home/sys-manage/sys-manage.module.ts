import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysManageRoutingModule } from './sys-manage-routing.module';
import { SysManageComponent } from './sys-manage.component';

@NgModule({
  declarations: [SysManageComponent],
  imports: [
    CommonModule,
    SysManageRoutingModule
  ]
})
export class SysManageModule { }
