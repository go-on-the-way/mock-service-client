import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './app-url';

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * POST请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options 请求头设置等
   */
  public postMethod(url, params?: any, options?: any): Observable<any> {

    return this.http
      .post(
        URLS[url],
        params,
        options
      );
  }

  /**
   * GET请求方法
   * @param url 请求地址
   * @param params 请求参数
   */
  public getMethod(url, params?: any): Observable<any> {
    return this.http
      .get(
        URLS[url],
        {
          params
        }
      );
  }

  /**
   * DELETE方法
   * @param url 请求地址
   * @param params 请求参数
   */
  public deleteMethod(url, params?: any): Observable<any> {
    return this.http.delete(
      URLS[url],
      params
    );
  }

  /**
   * PUT方法
   * @param url 请求地址
   * @param params 请求参数
   */
  public putMethod(url, params?: any, options?: any): Observable<any> {
    return this.http.put(
      URLS[url],
      params,
      options
    );
  }

  /**
   * 异步下载文件-文件流
   * @param fileName 文件名
   * @param method 请求方法
   * @param url 请求地址
   * @param params 请求参数
   */
  public downLoad(fileName: string, method: string, url: string, params: any) {
    if (method === 'POST') {
      this.postMethod(url, params, {
        responseType: 'blob'
      }).subscribe(res => {
        this.exeDownload(fileName, res);
      });
    }

    if (method === 'GET') {
      this.getMethod(url, {
        params,
        responseType: 'blob'
      }).subscribe(res => {
        this.exeDownload(fileName, res);
      });
    }

  }

  /**
   * 执行下载
   * @param fileName 文件名
   * @param data 文件数据
   */
  private exeDownload(fileName, data) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

}
