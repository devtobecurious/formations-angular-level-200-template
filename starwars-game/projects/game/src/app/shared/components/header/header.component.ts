import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchComponent } from 'search';
import { ApplicationState } from '../../../reducers';
import { getAllSpeciesNotEmpty } from '../../../features/game/store/species.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  species$$ = toSignal(this.store.select(getAllSpeciesNotEmpty))

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SearchComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
