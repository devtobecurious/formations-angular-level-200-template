import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../../shared/components/grid/models';
import { TileService } from '../../services/tile.service';
import { concatMap, finalize, fromEvent, interval, map, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  @ViewChild('btnStart', { static: true }) btnStart !: ElementRef<HTMLButtonElement>;
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    const parent$ = fromEvent(this.btnStart.nativeElement, 'click').pipe();
    const enfants$ = interval(1000).pipe(finalize(() => console.info('Fin des ticks')));

    // parent$.subscribe({
    //   next: () => {
    //     enfants$.subscribe({
    //       next: (value) => console.info('Enfants', value)
    //     });
    //   }
    // });

    // parent$.pipe(
    //   map(() => enfants$)
    // ).subscribe(item => item.subscribe(item => console.info('Enfants', item)));

    // mergeMap: je n'attends la fin de l'enfant (complete) pour passer au suivant
    // exemple : je fais une sauvegarde (parent) et j'envoie au retour de la sauvegarde, un appel à mon api de log (enfant)
    //const fromService$ = parent$.pipe(
    //  mergeMap(() => enfants$), // à chaque next parent, ça exécute le subscribe sur l'enfant, et retourn la valeur de chaque next enfant
    //  finalize(() => console.info('Fin de la partie'))
    //)

    // concatMap : j'attends la fin de l'enfant (complete) pour passer au suivant
    // const fromService$ = parent$.pipe(
    //   concatMap(() => enfants$), // à chaque next parent, ça exécute le subscribe sur l'enfant, et retourn la valeur de chaque next enfant
    //   finalize(() => console.info('Fin de la partie')) // le finalize s'applique sur le complete du parent !!
    // )

    // switchMap : je force la fin du dernier enfant (avec un complete) pour passer au suivant
    const fromService$ = parent$.pipe(
      switchMap(() => enfants$), // à chaque next parent, ça exécute le subscribe sur l'enfant, et retourn la valeur de chaque next enfant
      finalize(() => console.info('Fin de la partie')) // le finalize s'applique sur le complete du parent !!
    )

    fromService$.subscribe({
      next: tick => {
        console.info('Enfants', tick);
      },
      complete: () => console.info('Fin de la partie bis')
    });


    // this.tileService.loadAll()
    //   .subscribe(tiles => this.tiles = tiles);
  }

}
