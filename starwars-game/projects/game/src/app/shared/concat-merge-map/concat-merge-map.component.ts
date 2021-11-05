import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'game-concat-merge-map',
  templateUrl: './concat-merge-map.component.html',
  styleUrls: ['./concat-merge-map.component.css']
})
export class ConcatMergeMapComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    const getDataFromApi = (identifiant: number) => {
      return of(`element de mon api avec identifiant ${identifiant}`).pipe(
        delay(1500)
      );
    }

    from([1, 5, 10, 22, 200]).pipe(
      map(id => getDataFromApi(id))
    ).subscribe(item => item.subscribe(item2 => console.info('sans mergemap => item', item2)));

    from([1, 5, 10, 22, 200]).pipe(
      concatMap(id => getDataFromApi(id))
    ).subscribe(item => console.info('mergemap => item', item));
  }

}
