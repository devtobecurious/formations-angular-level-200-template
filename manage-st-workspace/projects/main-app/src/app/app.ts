import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignSystem } from 'design-system';
import { ToUpperPipe } from './examples/sum-pipe';

@Component({
  imports: [RouterOutlet, DesignSystem, ToUpperPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  //protected title = 'test'
  private readonly title = signal('test');

  protected readonly titleAsMaj = computed(() => {
    console.info('INSIDE COMPUTED');
    return this.title().toUpperCase();
  });

  sum(a: number, b: number): number {
    console.info('sum');
    return a+b;
  }

  click(): void {

  }

  ngOnInit(): void {
    console.info('********');

    
    setTimeout(() => {
      //this.title.set('Gestion des Storm Stroopers');
      this.title.update(old => old + ')=> Storm troopers');
      console.info('JE PASSE ICI')
    }, 1500);
    
    console.info('SYNC', this.titleAsMaj());

    console.info('----------');
  }
  
}
