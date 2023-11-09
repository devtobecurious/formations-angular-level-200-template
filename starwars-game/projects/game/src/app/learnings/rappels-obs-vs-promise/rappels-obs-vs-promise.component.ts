import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, finalize, from, map, shareReplay } from 'rxjs';

@Component({
  selector: 'game-rappels-obs-vs-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rappels-obs-vs-promise.component.html',
  styleUrl: './rappels-obs-vs-promise.component.css'
})
export class RappelsObsVsPromiseComponent {
  ngOnInit(): void {
    console.info('----');

    // console.info('code synchrone');

    // type TypeVoid = () => void;

    // const callBack: TypeVoid = () => {
    //   console.info('oh yeah');
    // };

    // setTimeout(callBack, 0);

    // const callbackAffichage = (mess: string) => {
    //   console.info('message', mess);
    // }

    // const promise = new Promise<string>((resolve, reject) => { // EAGER: execution dès qu'on l'appelle
    //   console.info("0000 - PROMISE "); // SYNC ICI
    //   resolve("P - RETOUR"); // ASYNC ICI
    // }).then(callbackAffichage);

    // const obs$ = new Observable<string>(observer => { // LAZY : besoin du subscribe
    //   console.info("0000 - OBSERVABLE "); // SYNC ICI
    //   observer.next("O - RETOUR 00"); // SYNC ICI

    //   setTimeout(() => {
    //     console.info('A - DERRIERE ? ')
    //     observer.next("O - RETOUR 01"); // ASYNC ICI
    //     console.info('B - DERRIERE ? ')
    //   }, 0);

    //   observer.complete();
    //   observer.next("O - RETOUR 10"); // SYNC ICI
    //   console.info("0001 - OBSERVABLE "); // SYNC ICI
    // });

    // // obs$.subscribe();

    // //obs$.subscribe(callbackAffichage);
    // obs$
    // .pipe(
    //   map(item => item.toLocaleLowerCase()), //à chaque next
    //   finalize(() => console.info('FINALIZE'))
    // )
    // .subscribe({
    //   next: callbackAffichage,
    //   error: err => {},
    //   complete: () => {console.info('toto')}
    // });

    // from([1, 2, 3]).subscribe(item => console.info('from', item));


    const obs$ = new Observable<number>(observer => {
      console.info('==== OBS ====');
      observer.next(1);
      observer.next(2);
      observer.next(3);

      console.info('==== FIN OBS ====');
    });

    const obsMisEnCache$ = obs$.pipe(shareReplay(2));

    obsMisEnCache$.subscribe({
      next: result => console.info('Oh yeah',result)
    });

    obsMisEnCache$.subscribe({
      next: result => console.info('Oh yeah 2',result)
    });

    obsMisEnCache$.subscribe({
      next: result => console.info('Oh yeah 3',result)
    });

    console.info('**** APRES == ASYNC ****');
  }
}
