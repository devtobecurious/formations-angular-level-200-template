import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { GamesService } from '../services';
import {SearchStore} from 'search';

@Component({
  selector: 'app-list-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-game.component.html',
  styleUrl: './list-game.component.css'
})
export class ListGameComponent {
  private readonly searchStore = inject(SearchStore);
  private toKill = new Subject<boolean>();

  ngOnInit(): void {
    this.searchStore.asObservable.pipe(
      takeUntil(this.toKill)
    ).subscribe(item => {
      console.info('recherche', item);
    })
  }

  ngOnDestroy(): void {
    this.toKill.next(true);
    this.toKill.unsubscribe();
  }

   update(): void {

   }
}
