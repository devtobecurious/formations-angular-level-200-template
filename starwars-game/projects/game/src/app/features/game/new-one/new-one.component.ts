import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, map, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  @ViewChild('btnSearch', {static: true}) //static: permet de ne pas attendre le afterviewinit
  private btnSearch !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    const parent$ = fromEvent(this.btnSearch.nativeElement, 'click');
    // parent$.subscribe(ev => { // subscribe de subscribe à bannir => doom pyramid !
    //   interval(1000).subscribe(item => {
    //     console.info('tick', item);
    //   })
    // })

    // const enfant$ = interval(1000); // c'est mieux, mais on a toujours le x2 subscribe
    // parent$.subscribe(ev => { // subscribe de subscribe à bannir => doom pyramid !
    //   enfant$.subscribe(item => {
    //     console.info('tick', item);
    //   });
    // })

    const enfant$ = interval(1000).pipe(take(20)); // c'est mieux, mais on a toujours le x2 subscribe
    // parent$
    // .pipe(
    //   map(item => enfant$) // je renvoie un observable de number, au lieu de l'Event
    // )
    // .subscribe(enfant => {
    //   enfant.subscribe(item => console.info('tick')); // oops meme probleme, merge map
    // });

    // merge map: je n'attends pas le complete de l'enfant, pour me réabonner sur l'obs enfant
    // parent$
    // .pipe(
    //   mergeMap(item => enfant$) // je m'abonne sur l'enfant (je fais un subscribe sur l'enfant) // item appartient au parent
    // )
    // .subscribe(tick => {
    //   console.info('tick', tick);
    // });

    // concat map : j'ai besoin que l'enfant complete avant de me réabonner
    // autant de next parent feront de next enfants (si complete chez l'enfant !!)
    // parent$
    // .pipe(
    //   concatMap(item => enfant$) // je m'abonne sur l'enfant (je fais un subscribe sur l'enfant) // item appartient au parent
    // )
    // .subscribe(tick => {
    //   console.info('tick', tick);
    // });

    // switch map : ici, je me désabonne de l'ancien enfant, à chaque nouveau next parent
    parent$
    .pipe(
      switchMap(item => enfant$) // je m'abonne sur l'enfant (je fais un subscribe sur l'enfant) // item appartient au parent
    )
    .subscribe(tick => {
      console.info('tick', tick);
    });

    // this.tileService.loadAll()
    // .subscribe(tiles => this.tiles = tiles);
  }

}
