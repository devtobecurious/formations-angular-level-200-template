import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-vs-promise',
  standalone: true,
  imports: [],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  //titreChangeant$ = new Observable(observer => {})

  // hyperLong = 0;
  // private readonly subscription = new Subscription();

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // ngOnInit() { // ça fonctionne !
  //   console.info('---------')

  //   console.info('code synchrone')

  //   // setTimeout(() => {
  //   //   console.info('QUETE 000 - Tour de chauffe --> ')
  //   //   const calculHyperLong = 15000;
  //   // }, 2000)

  //   // const promise = new Promise((resolve, reject) => { // EAGER
  //   //   setTimeout(() => {
  //   //     console.info('1. PROMESSE') // ASYNC
  //   //     resolve('COUCOU PROMISE') // Le resolve est toujours ASYNC
  //   //   }, 2000);
  //   //   console.info('0. PROMESSE') // SYNC

  //   // }).then(result => console.info(result));

  //   const obs$ = new Observable(observer => { // LAZY
  //     console.info('0. OBSERVABLE') // SYNC
  //     observer.next('COUCOU OBSERVABLE SYNC 1') // SYNC

  //     observer.next('COUCOU OBSERVABLE SYNC 2') // SYNC
  //     setTimeout(() => {
  //       observer.next('COUCOU OBSERVABLE ASYNC 2') // ASYNC
  //       observer.complete()
  //     }, 0);
  //   });
  //   let sub = obs$.subscribe({
  //     next: result => console.info(result),
  //     error: err => console.error(err),
  //     complete: () => console.info('FINI !!!')
  //   })
  //   this.subscription.add(sub)

  //   sub = obs$.subscribe({
  //     next: result => console.warn(result)
  //   }) // Chaque subscribe ré exécute la fonction de l'observable
  //   this.subscription.add(sub)

  //   console.info('********')
  // }
}
