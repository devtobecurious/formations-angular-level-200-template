import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObsVsPromiseComponent } from './obs-vs-promise/obs-vs-promise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObsVsPromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rappels-observables';
}
