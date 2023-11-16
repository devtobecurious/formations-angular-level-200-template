import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-vs-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  ngOnInit(): void {
    console.info('--------------')

    const callback = () => {
      console.info('Ah que johny');
    }
    // setTimeout(callback, 0);

    const callbackPO = (mess: string) => console.info(mess);

    const promise = new Promise<string>((resolve, reject) => { // EAGER
      console.info('0 - Promise'); // l'exécution du code de la function de la promise est SYNC

      // SUPER CALCUL
      const result = 'Pro - RETOUR';

      resolve(result); // ASYNC
    }).then(callbackPO);

    const obs$ = new Observable<string>(observer => { // LAZY
      console.info('0 - Observable'); // SYNC de base

      // SUPER CALCUL
      const result = 'Obs - RETOUR';

      observer.next(result); // SYNC
      observer.next(result + ' - 1');

      setTimeout(() => {
        observer.next(result + ' - 2');
      }, 0);

      observer.complete();
      console.info('FIN D OBS')
    }).pipe(shareReplay(1)); // Hot observable

    obs$.subscribe({
      next: callbackPO,
      complete: () => console.info('finnnnnniii enfin !!')
    });

    obs$.subscribe({
      next: callbackPO
    }); // réexécute tout le code de l'observable

    console.info('****************')
  }
}
