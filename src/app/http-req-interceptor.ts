import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor(public router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(// 捕获请求
        (event: HttpEvent<any>) => {// 请求成功执行
          if (event instanceof HttpResponse) {
            switch (event.body.code) {
              case 10000:
                break;
            }
          }
        },
        (err: any) => {// 请求失败执行
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {

            }
          }
        }
      ),
      finalize(() => {// 无论请求成功或失败都会执行

      })
    );
  }
}
