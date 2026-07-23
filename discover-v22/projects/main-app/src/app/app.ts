import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Star wars');
  protected readonly titleMaj = computed(() => {
    console.info('titleMaj computed called');
    return this.title().toUpperCase();
  });

  // private readonly detectValue = effect(() => {
  //   console.info('detectValue effect called');
  //   console.info('TITLE ??', this.title());
  // });

  ngOnInit() {
    console.log('App component initialized');
    setTimeout(() => {
      //this.title.set('Star Wars : The Force Awakens');
      this.title.update(old => old + ' : The Force Awakens');
    }, 1500);

    console.info('TITLE ??', this.title());
  }
}
