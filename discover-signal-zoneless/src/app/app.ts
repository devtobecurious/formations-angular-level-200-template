import { Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private i = 0;
  protected readonly title = signal('Starwars game');
  protected readonly titleMaj = computed(() => this.title().toUpperCase());

  protected readonly newSignal = computed(() => signal(this.title()));

  protected readonly linkedS = linkedSignal(() => this.title());

  ngOnInit(): void {

  }

  changeStepTwo(): void {
    //this.newSignal().set('Changed step two');
    this.newSignal().update(old => old + this.i++);
  }

  changeTitle(): void {
    this.title.set('HP game');

    setTimeout(() => {
      this.title.set('LoR game');
      console.log(this.title())
    }, 1000)
  }
}
