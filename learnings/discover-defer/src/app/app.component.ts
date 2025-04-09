import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'discover-defer';

  dataIsLoaded = signal(false)

  ngOnInit(): void {
    setTimeout(() => {
      this.dataIsLoaded.set(true)
    }, 3000);
  }
}
