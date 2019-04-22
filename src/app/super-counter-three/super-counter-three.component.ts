import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-super-counter-three',
  templateUrl: './super-counter-three.component.html',
  styleUrls: ['./super-counter-three.component.css']
})
export class SuperCounterThreeComponent implements OnInit {

  autoShow = setInterval(() => {this.counter.value += 2}, 1000);

  @Input()
  counter: Counter;

  constructor() { }

  ngOnInit() {
  }

}
