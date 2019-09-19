import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../core/primeng.module';
import { CustomModule } from '../../core/custom-ui/custom.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error/error.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSiderbarComponent } from './home-siderbar/home-siderbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    HomeHeaderComponent,
    HomeSiderbarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    CustomModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
