import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'game';

  ngOnInit() {
    setTimeout(() => {
      console.info('AH QUE JOHNY')
    }, 0);
    setTimeout(() => {
      console.info('AH QUE JOHNY 2')
    }, 0);

    console.info('-----');
    console.info('AH QUE COUCOU');
    const obs = new Observable(() => {
      console.info('OBS')
    });
    obs.subscribe()

    const prom = new Promise(() => {
      console.info('PROM')
    })
    console.info('*****');
  }
}
