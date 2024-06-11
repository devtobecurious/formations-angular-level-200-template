import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ObsVsPromiseComponent } from './learnings/obs-vs-promise/obs-vs-promise.component';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet, HeaderModule, SideBarComponent, ObsVsPromiseComponent]
})
export class AppComponent {
  title = 'game';
}
