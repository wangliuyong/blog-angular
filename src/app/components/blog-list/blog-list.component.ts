import { Component, OnInit } from '@angular/core';

import {BlogService} from '../../services/blog.service'

class xxx{
  data:Array<any>
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {

  public blogs:object;

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.blogService.getBlogs().then((res:xxx)=>{
      console.log('blog-list get data:',res.data);
      this.blogs=res.data
    })
    
  }

}
