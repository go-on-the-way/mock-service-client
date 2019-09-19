import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../../../core/primeng.module';
import { CustomModule } from '../../../../core/custom-ui/custom.module';
import { SysDictRoutingModule } from './sys-dict-routing.module';
import { SysDictComponent } from './sys-dict.component';

@NgModule({
  declarations: [SysDictComponent],
  imports: [
    CommonModule,
    PrimengModule,
    CustomModule,
    SysDictRoutingModule
  ]
})
export class SysDictModule { }
