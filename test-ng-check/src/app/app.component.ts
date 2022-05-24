import { ApplicationRef, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {
  title = 'test-ng-check';

  constructor(public app: ApplicationRef, public cd: ChangeDetectorRef) {

  }
}
