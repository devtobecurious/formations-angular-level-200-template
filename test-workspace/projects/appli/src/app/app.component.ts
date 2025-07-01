import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSearchComponent } from 'my-search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appli';

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Plouf'
    }, 1500);

  }
}
