import { Component, OnInit ,ViewChild,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  public str:string="song daat00000"
  @ViewChild('demo') myDemo:any;
  @Input () parentData:any;
  @Input() fromFun:any;
  @Output() testSon=new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.parentData);
    //this.fromFun('son')
    
  }

  ngAfterViewInit() {
    //在这个钩子中来操作DOM
    console.log('demo view load');
    
    let demo:any=document.getElementById('demo')
    //console.log(demo);
    console.log(this.myDemo.nativeElement.innerHTML);
  }

  //方法
  test(){
    this.testSon.emit('son emit')
  }

}
