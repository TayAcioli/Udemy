import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  i: number = 0;
  logs: any[][] =[[]];
  d: Date = new Date();
  date: string;

  constructor() { }

  ngOnInit() {
  }

  onHideShow(): void {

    this.i++;
    this.date = this.d.getFullYear().toString() + '/' + (this.d.getMonth()+1) +'/' + this.d.getDate() + ' ' + this.d.getHours() + ':' + this.d.getMinutes() + ':' + this.d.getSeconds();
    this.logs.push([this.i, this.date]);

    if(document.getElementById("p").style.display === "none"){
      document.getElementById("p").style.display = "block";
    }else{
      document.getElementById("p").style.display = "none";
    }

    console.log(this.logs);
  }

}
