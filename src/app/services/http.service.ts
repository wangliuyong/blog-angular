import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';


import { environment } from '../../environments/environment';
//import {Config} from '../model/api'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public phpUrl(path: string): string {
    return environment.api.php_url + path;
  }

  public javaUrl(path: string): string {
    return environment.api.java_url + path;
  }

  //获取数据
  public get(path: string, params: any, isJava: boolean) {

    let reqUrl = this.phpUrl(path);
    if (isJava) {
      reqUrl = this.javaUrl(path);
    }

    let dataParams = new HttpParams();
    for (const key in params) {
      if (params[key] === false || params[key]) {
        dataParams = dataParams.set(key, params[key]);
      }
    }

    // 底层http调用
    return this.http.get(reqUrl, { params: dataParams })
    // 响应转化为Promise
      .toPromise();


    //另一种Observable

  }

  public post(path: string, params: any){

    let httpOption={headers: new HttpHeaders({"Content-Type":'application/json'})}

    this.http.post(path,params,httpOption).subscribe()
  }
  //跨域
  public jsonp(path){
    this.http.jsonp(path,'calaback').subscribe()
  }


}
