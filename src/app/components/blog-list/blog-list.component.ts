import { Component, OnInit } from '@angular/core';

import {BlogService} from '../../services/blog.service'
import {Respones} from '../../classs/res'
import {Blog} from '../../classs/blog'



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {

  public blogs:Blog[];
  public flag:boolean=true;
  public list:any[]=['list'];
  public test:Array<any>=[];
  public dateStr=new Date()


  
  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.blogService.getBlogs().then((res:Respones)=>{
      console.log('blog-list get data:',res.data);
      this.blogs=res.data
    })
    
  }

  ngAfterViewInit() {
    
  }

  trigger(){
    this.flag=!this.flag;
  }

}
