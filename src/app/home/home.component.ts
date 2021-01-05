import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCounter : number;
  projectText :string = "Angular Project";
  projects = [];
  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.projects.length;
  }

  addItem() {
this.projects.push(this.projectText);
this.projectText="";
this.itemCounter = this.projects.length;
  }

  removeItem(i) 
  {
    this.projects.splice(i,i);
    this.itemCounter= this.projects.length;
  }
}
