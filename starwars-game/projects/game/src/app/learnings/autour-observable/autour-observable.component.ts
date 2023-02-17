import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'game-autour-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autour-observable.component.html',
  styleUrls: ['./autour-observable.component.css']
})
export class AutourObservableComponent implements OnDestroy {

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription = new Subscription();

  ngOnInit(): void {
    console.info('------------------------------');

    setTimeout(() => {
      console.info('setTimeout 001');
    }, 0);

    const callback = (mess: string) => console.info(mess);

    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        console.info('0. Promesse');
        resolve('P => ah que johny');
      }, 0);
    }).then(callback);

    const observable$ = new Observable<string>(subscriber => {
      subscriber.next('AAAAAAAAAAAA =>  ah que johny');



      setTimeout(() => {
        console.info('0. Observable');
        subscriber.next('O =>  ah que johny');
        subscriber.next('OO =>  ah que johny');

      }, 0);
      subscriber.complete();
    });
    this.subscription.add( observable$.subscribe(callback,
                                                 err => console.error(err),
                                                 () => console.info('Cest fini !!!!')
                                                )
                          );
    this.subscription.add( observable$.subscribe() );

    console.info('*******************************');
  }

  getPromess() {
    return new Promise((resolve, reject) => {});
  }
}
