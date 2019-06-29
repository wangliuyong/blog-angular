import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {map,filter} from 'rxjs/operators'

import {HttpService} from './http.service'
import {Respones} from '../classs/res'
import {Config} from '../model/api'


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public blogList:Array<any>;

  constructor(
    private httpService: HttpService
  ) { }
  
  //获取博客列表
  public getBlogs() {
    return new Promise((resolve,reject)=>{
      this.httpService.get('/blog',{},false).then((res:Respones)=>{
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


    function xxx(){
      return new Observable((observable)=>{
        this.httpService.get('/blog',{},false).then(((res:Respones)=>{
          if(res.code===200){
            observable.next(res)
            
          }else if(res.status==='ok'){
            observable.next(res)
          }else{
            observable.error(res)
          }
        }))
      })
    }

    //调用
    xxx().pipe(
      filter((value)=>{
        return value>0
      })
      //map
    ).subscribe((res)=>{
      console.log(res);
      
    })

  }





}
