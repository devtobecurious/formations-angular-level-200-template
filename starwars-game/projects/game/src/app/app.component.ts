import { Component, inject } from '@angular/core';
import { LogersService } from 'logers';

@Component({
  standalone: false,
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly logger = inject(LogersService)
  title = 'game';

  ngOnInit(): void {
    this.logger.log('info', 'AppComponent:Init')
  }
}
