import { Component, computed, effect, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app'

  counter$$ = signal<number>(0)

  count(): void {
    // this.counter.update(() => this.counter() + 1)
  }

  title$$ = signal<string>('test-app')
  titleMaj$$ = computed(() => this.title$$().toUpperCase())

  counterEffect = effect(() => {
    const titleResult = this.title$$()
    const counterResult = untracked(this.counter$$)
    console.info('effect', titleResult, counterResult)
  })

  ngOnInit(): void {
    setTimeout(() => {
      this.title = '1. Star wars - BO'
    }, 1500)

    setTimeout(() => {
      this.title$$.set('2. Star wars - BO')
    }, 2500);

    setTimeout(() => {
      this.counter$$.set(100)
    }, 3500);
  }

  click(): void {
    console.info('ça refresh meme si on n\'est plus dans la zone :\'(')
  }
}
