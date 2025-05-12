import { Component, inject, OnInit } from '@angular/core';
import { LogsService } from 'logs';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly logger = inject(LogsService)
  title = 'game'

  ngOnInit(): void {
    this.logger.log('App started', 'debug')
  }
}
