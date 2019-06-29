import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  public parData:string="来自于父组件的数据";

  constructor() { }

  ngOnInit() {

  }

  fromFun(): void{
    console.log("来自于父组件的方法");
    
  }

}
