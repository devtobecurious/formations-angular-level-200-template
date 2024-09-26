import { Component } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-obs-vs-promise',
  standalone: true,
  imports: [],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  display(): void {
    console.info('display');
  }

  ngOnInit(): void {
    console.info('-----');

    setTimeout(() => {
      console.info('ASYNC')
    }, 0);

    // PROMISE
    // const promise = new Promise<string>((resolve, reject) => { // EAGER
    //   console.info('PROMISE - 0'); // SYNC

    //   setTimeout(() => {
    //   }, 1500);
    //   resolve('PROMISE - RETOUR');

    //   console.info('PROMISE - 1');
    // }).then(item => console.info(item));

    // OBSERVABLE
    const obs$ = new Observable(observer => { // LAZY
      console.info('OBSERVABLE - 0'); // SYNC

      const value = Math.random().toString()
      setTimeout(() => {
        observer.complete();
        observer.next(value); // ASYNC
        observer.next('OBSERVABLE - RETOUR 1'); // ASYNC

      }, 0);

      console.info('OBSERVABLE - 1');
    }).pipe(
      tap(item => console.info('==> afficher sans modifier', item)),
      tap(item => console.info('==> afficher sans modifier 2', item)),
      map(item => item + ' suffixe'),
      // filter(item => item.endsWith('test')),
      map(item => item.toLocaleLowerCase())
    );

    obs$.subscribe({
      next: item => console.info(item),
      complete: () => console.info('capri c\'est fini')
    });
    // obs$.subscribe({
    //   next: item => console.info(item)
    // });

    console.info('*****');
  }
}
