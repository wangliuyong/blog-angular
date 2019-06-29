import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  public parData:string="来自于父组件的数据";
  @ViewChild('demo') son:any;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log("son:",this.son.str);
  }

  fromFun(data:string): void{
    console.log(data);
  }

}
