import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TetsLibComponent } from 'ma-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TetsLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tets-app';
}
