import { Component, inject, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnCompNonPushComponent } from './un-comp-non-push/un-comp-non-push.component';
import { UnCompPushComponent } from './un-comp-push/un-comp-push.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UnCompNonPushComponent, UnCompPushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private readonly zone = inject(NgZone)

  title = 'test-detect-changes';
  client = {name: 'toto', surname: 'surToto'}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.title = 'ah que coucou'
          this.zone.run(() => {})
        }, 1500)
    });

    // setTimeout(() => {
    //   this.title = 'ah que coucou'
    // }, 1500)
  }

  display(): void {
    console.info('AppComponent')
  }

  test(): void {
      //this.client.name = 'tata'
     this.client  = { name: 'tata', surname: ''}
  }
}
