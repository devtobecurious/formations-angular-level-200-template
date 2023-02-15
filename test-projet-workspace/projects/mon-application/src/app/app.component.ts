import { Component } from '@angular/core';
import { TestLibComponent } from 'ma-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-application';
  monEnfant !: TestLibComponent;
}
