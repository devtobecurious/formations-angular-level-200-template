import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestLibComponent } from 'malib';
import { ObsVsPromiseComponent } from './obs-vs-promise/obs-vs-promise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestLibComponent, ObsVsPromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';
}
