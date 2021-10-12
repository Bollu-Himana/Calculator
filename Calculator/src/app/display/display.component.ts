import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@ Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  @Output() event = new EventEmitter<string>();
  ngOnInit(): void {
  }
 
}
