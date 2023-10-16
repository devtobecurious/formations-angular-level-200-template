import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, shareReplay } from 'rxjs';

type Callback = (retour: string) => void;
const callBackM: Callback = (retour: string) => {
  console.info('callback: ' + retour);
};

@Component({
  selector: 'game-discover-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-obs.component.html',
  styleUrls: ['./discover-obs.component.css']
})
export class DiscoverObsComponent {
  ngOnInit(): void {
    /*
      1. Avant les *
      2. Entre les * et les -
      3. Après les -
      4. Ca marche pas ou ça plante, ou ça fait rien
    */

  console.info('******************');




    const promise = new Promise<string>((resolve, reject) => {
      console.info('Promise');

      resolve("p => ok");
    }).then(callBackM);

    const obs$ = new Observable<string>(observer => {
      console.info('Observable');

      setTimeout(() => {
        console.info('setTimeout');
        observer.next('o => ok');
      }, 0);

      observer.complete();
      observer.next('o => ok');

      console.info('Observable: ENDDDDDDD');
    });

    obs$.subscribe({
      next: callBackM,
      complete: () =>  console.info('complete !!')
    });
    obs$.subscribe();

    console.info('------------------------------');
  }

  maFonction() {
    //console.info('maFonction');
  }
}
