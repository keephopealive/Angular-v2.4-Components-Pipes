import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  things = [
    {title:"first thing"},
    {title:"second thing"},
    {title:"third thing"}
  ]
  
  title = 'app works!';
  constructor(){
    console.log("constructor()")
  }
  change(){
    this.title= this.title+"@";
  }

  ngOnInit(){
    console.log("AppComponent - ngOnInit()")
  }

  ngOnChanges(){
    console.log("ngOnChanges()");
  }
  
  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
