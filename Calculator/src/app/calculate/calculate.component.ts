import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Output() public evt1=new EventEmitter();
  disp='';
  a='';
  evalute():void{
    this.a=eval(this.disp);
   this.evt1.emit(eval(this.disp))

   this.disp='';
  }
  display(value:string):void{
    this.disp=this.disp+value
    }
 
}
