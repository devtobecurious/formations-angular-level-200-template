import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test-app';
  title = signal<string>('test-app');

  

  changeTitle(): void {
    //this.title = 'Nouveau titre';
    this.title.set('Nouveau titre');
  }
}
