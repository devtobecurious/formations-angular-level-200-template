import { Component } from '@angular/core';

@Component({
  selector: 'app-un-comp-non-push',
  standalone: true,
  imports: [],
  templateUrl: './un-comp-non-push.component.html',
  styleUrl: './un-comp-non-push.component.css'
})
export class UnCompNonPushComponent {
  display(): void {
    console.info('UnCompNonPushComponent')
  }
}
