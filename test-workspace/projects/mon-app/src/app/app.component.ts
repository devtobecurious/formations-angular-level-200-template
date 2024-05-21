import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestLibComponent} from 'mytest';

const deps = [RouterOutlet, TestLibComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: deps,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-app';
}
