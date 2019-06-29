import { Component, OnInit ,ViewChild,Input} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  @ViewChild('demo') myDemo:any;
  @Input () parentData:any;

  constructor() { }

  ngOnInit() {
    console.log(this.parentData);
    
  }

  ngAfterViewInit() {
    //在这个钩子中来操作DOM
    console.log('demo view load');
    
    let demo:any=document.getElementById('demo')
    //console.log(demo);
    console.log(this.myDemo.nativeElement.innerHTML);
  }

  //方法


}
