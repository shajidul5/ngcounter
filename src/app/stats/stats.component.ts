import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  counter_count;

  @Input()
  super_counter_count;

  @Input()
  super_counter_count_two;

  @Input()
  super_counter_count_three;

  @Input()
  average_clicks_per_second;

  constructor() { }

  ngOnInit() {
  }

}
