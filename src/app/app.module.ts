import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrimengModule } from './core/primeng.module';
import { CustomModule } from './core/custom-ui/custom.module';
import { ConfirmationService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocComponent } from './pages/doc/doc.component';
import { HttpReqInterceptor } from './http-req-interceptor';
import { IconFontComponent } from './pages/icon-font/icon-font.component';
import { RouterGuard } from './router-guard';
import { WebsoketDemoComponent } from './pages/websoket-demo/websoket-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DocComponent,
    IconFontComponent,
    WebsoketDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    CustomModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RouterGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptor,
      multi: true
    },
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
