import { Component, computed, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignSystem } from 'design-system';

@Component({
  imports: [RouterOutlet, DesignSystem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly title = signal('>>');
  private readonly ageYoda = signal(800);

  protected readonly titleMaj = computed(() => {
    console.info('TEST COMPUTED', this.title())
    const titleVal = this.title().toUpperCase();

    return titleVal + ' --' + untracked(this.ageYoda)
  })
 //protected title = 'main-app';

 ecoute(): number {
   console.info('??')
  return new Date().getFullYear();
 }

 ngOnInit(): void {

  setTimeout(() => {
      //this.title.set('Star wars ludotheque');
      this.title.update(old => old + ' Star wars ludotheque');
  }, 0);

  setTimeout(() => {
    this.ageYoda.update(old => old + 100)

  }, 800);

  setTimeout(() => {
    this.title.set('MA LUDOTECK')

  }, 2000);

  console.info(this.title())
 }
}
