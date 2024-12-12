import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestLibComponent } from 'testLib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
