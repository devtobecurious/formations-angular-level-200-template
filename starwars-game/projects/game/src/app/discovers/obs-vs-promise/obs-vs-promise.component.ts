import { Component, inject } from '@angular/core';
import { LogersService } from 'logers';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-obs-vs-promise',
  standalone: true,
  imports: [],
  templateUrl: './obs-vs-promise.component.html',
  styleUrl: './obs-vs-promise.component.css'
})
export class ObsVsPromiseComponent {
  private readonly logger = inject(LogersService)
  // private promise = new Promise(()) // A ne jamais faire, car EAGER

  maFonction(): void {
    // this.logger.log('info', 'ma fonction')
  }

  ngOnInit(): void {
    this.logger.log('info', '-------')
    this.logger.log('info', 'ah que coucou')

    setTimeout(() => {
      this.logger.log('info', 'execute timeout')
    }, 0);

    const promise = new Promise<string>((resolve, reject) => { // EAGER
      this.logger.log('info', 'PROMISE 0') // SYNC

      setTimeout(() => {
        this.logger.log('info', 'PROMISE 1')
      }, 0);

      resolve('PROMISE RESULT') // ASYNC
    }).then(item => this.logger.log('info', item))


    const obs$ = new Observable<string>(subscriber => { // LAZY
      this.logger.log('info', 'OBSERVABLE 0') // SYNC

      setTimeout(() => {
        this.logger.log('info', 'OBSERVABLE 1') // ASYNC
        subscriber.next('OBSERVABLE RESULT 2')

      }, 0);

      subscriber.next('OBSERVABLE RESULT') // SYNC

      //subscriber.complete()
      for(let i = 0; i < 10; i++) {
        subscriber.next(`${i} => youpi`) // SYNC
      }
    })
    // obs$.subscribe(item => this.logger.log('info', item)) // On déclenche la fonction dans l'observable
    obs$.subscribe({
      next: item => this.logger.log('info', item),
      complete: () => this.logger.log('info', 'fini '),
    })

    obs$.subscribe({
      next: item => this.logger.log('info', item),
    })

    this.logger.log('info', '********************************************')
  }
}
