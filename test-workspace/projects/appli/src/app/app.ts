import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Compo } from 'compair';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = signal('appli');
  protected title2 = computed(() => this.title().toUpperCase())


  ngOnInit() {
    setTimeout(() => {
      this.title.set('appli 2')
      console.info('App, ngOnInit', this.title()  )
    }, 1000)
  }
}
