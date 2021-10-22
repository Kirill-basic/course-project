import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // @ts-ignore
  interval;
  lastNumber = 0;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStarted() {
    this.interval = setInterval(()=>{
      this.gameStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onGameStopped() {
    clearInterval(this.interval);
  }

}
