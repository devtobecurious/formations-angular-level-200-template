import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaLibComponent } from 'mylibrary'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-appli-un';
}
