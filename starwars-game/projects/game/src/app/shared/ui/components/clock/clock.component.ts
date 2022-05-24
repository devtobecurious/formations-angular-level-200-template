import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.time + 1;
    }, 1000);
  }

}
