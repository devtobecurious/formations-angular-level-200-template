import { ApplicationRef, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, map, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  application = inject(ApplicationRef);
  changeDetector = inject(ChangeDetectorRef);

  tiles: Tile[] = [];
  // @ViewChild('start', {static: true}) button !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) {
  }

  detectLesChangements(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
     this.changeDetector.detach();

    // let parent$ = fromEvent(this.button.nativeElement, 'click');
    // const enfant$ = interval(1000).pipe(take(100));

    // parent$.subscribe(ev => {
    //   enfant$.subscribe(item => console.info(item)); // Le nested subscribe est interdit !!!
    // })
    // const obs$ = parent$.pipe(
    //   map(ev => enfant$) // converter de valeur, pas d'observable
    // );

    // obs$.subscribe({
    //   next: obs => obs.subscribe(child => console.info(child))
    // })

    // n'attend pas le complete de l'enfant
    // const obs$ = parent$.pipe(
    //   mergeMap(ev => enfant$) // subscribe sur l'enfant et next => même comportement de subscribe de subscribe
    // );

    // const obs$ = parent$.pipe(
    //   concatMap(ev => enfant$) // subscribe sur l'enfant et next => même comportement de subscribe de subscribe
    // );

    // obs$.subscribe(tick => console.info(tick));


    this.tileService.loadAll()
    .subscribe(tiles => {
      this.tiles = tiles;
      // this.changeDetector.reattach();
    });
  }

}
