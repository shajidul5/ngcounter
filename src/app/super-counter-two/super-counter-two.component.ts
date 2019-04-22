import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-super-counter-two',
  templateUrl: './super-counter-two.component.html',
  styleUrls: ['./super-counter-two.component.css']
})
export class SuperCounterTwoComponent implements OnInit {

  @Input()
  counter: Counter;

  constructor() { }

  start(){
    setInterval(() => {this.counter.value += 1}, 1000);
  }

  ngOnInit() {
  }

}
