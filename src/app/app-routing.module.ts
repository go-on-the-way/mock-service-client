import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterGuard } from './router-guard';
import { DocComponent } from './pages/doc/doc.component';
import { IconFontComponent } from './pages/icon-font/icon-font.component';
import { WebsoketDemoComponent } from './pages/websoket-demo/websoket-demo.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'src/app/pages/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/pages/home/home.module#HomeModule',
    canActivate: [RouterGuard]
  },
  {
    path: 'doc',
    component: DocComponent
  },
  {
    path: 'icon',
    component: IconFontComponent
  },
  {
    path: 'ws',
    component: WebsoketDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
