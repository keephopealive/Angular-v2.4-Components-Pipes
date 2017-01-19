import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  @Input() task;

  value: number;
 
  constructor() {
    
  }

  ngOnInit() {
    console.log(this.x);
  }

}
