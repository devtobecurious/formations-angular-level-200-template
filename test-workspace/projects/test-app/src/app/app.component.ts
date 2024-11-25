import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaLibComponent } from 'maLib';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MaLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
