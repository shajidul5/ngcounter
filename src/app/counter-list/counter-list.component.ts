import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { element } from '@angular/core/src/render3';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  counters: Counter[];
  super_counters: Counter[];
  super_counters_two: Counter[];
  super_counters_three: Counter[];

  constructor() { 
    this.counters=[];
    this.super_counters=[];
    this.super_counters_two = [];
    this.super_counters_three = [];
  }

  create(){

    //Create super counter and regular counters
    if(this.counters.length === 5){
      let counter = new Counter();
      let total = this.counters.reduce((acc, counter) => {
        return acc+=counter.value;
      }, 0)
      counter.value = total;
      counter.level = 1;
      this.super_counters.push(counter);
      for(let i=0; i<6; i++){
        this.counters.pop(); 
      }
    }
    else{
      this.counters.push(new Counter());
    }

    //Create super counter level two
    if(this.super_counters.length === 3){
      let counter = new Counter();
      let total = this.super_counters.reduce((acc, counter) => {
        return acc+=counter.value;
      }, 0)
      counter.value = total;
      counter.level = 2;
      this.super_counters_two.push(counter);
      for(let i=0; i<3; i++){
        this.super_counters.pop(); 
      }
    }

    //Create super counter level three
    if(this.super_counters_two.length === 3){
        let counter = new Counter();
        let total = this.super_counters_two.reduce((acc, counter) => {
          return acc+=counter.value;
        }, 0)
        counter.value = total;
        counter.level = 3;
        this.super_counters_three.push(counter);
        for(let i=0; i<6; i++){
          this.super_counters_two.pop(); 
        }
    }
  }

  remove(){
    this.counters.pop();
  }

  ngOnInit() {
  }

}
