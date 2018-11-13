import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
  }

}
