import { Injectable } from '@angular/core';

import {HttpService} from './http.service'
import {Config} from '../model/api'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private httpService: HttpService
  ) { }
  
  //获取博客列表
  public getBlogs() {
    return new Promise((resolve,reject)=>{
      this.httpService.get('/blog',{},false).then((res:any)=>{
        if(res.code===200){
          //console.log(res)
          resolve(res)
        }else if(res.status==='ok'){
          resolve(res)
          //console.log(res)
        }else{
          reject(res)
        }
      }).catch((err)=>{
        reject('API错误')
      })
    })
  }


}
