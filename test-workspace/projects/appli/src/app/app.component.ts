import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSearchComponent } from 'my-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('appli')
  counter = signal(0)
  titleMaj = computed(() => this.title().toUpperCase() + '/' + this.counter())
  titleShort = computed(() => this.titleMaj().charAt(0))

  ngOnInit(): void {
    setTimeout(() => {
      this.title.set('Plouf')
    }, 1500);

  }
}
