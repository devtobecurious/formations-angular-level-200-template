import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaLibComponent } from 'mylibrary'
import { OneComponent } from './one/one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaLibComponent, OneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-appli-un';
}
