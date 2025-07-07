import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Compo } from 'compair';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'appli';
}
