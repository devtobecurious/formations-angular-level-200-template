import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestLibComponent } from 'ma-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
