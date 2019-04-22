import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input()
  counter: Counter;

  constructor() {
  }

  increment(){
    this.counter.value += 3;
  }
  decrement(){
    this.counter.value -= 3;
  }

  ngOnInit() {
  }

}
