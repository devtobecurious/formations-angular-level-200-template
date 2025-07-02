import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { isPegi13 } from '../../store/user.selectors';

@Component({
  selector: 'game-resume-one-side-bar',
  imports: [],
  templateUrl: './resume-one-side-bar.component.html',
  styleUrl: './resume-one-side-bar.component.css'
})
export class ResumeOneSideBarComponent {
 private readonly store = inject(Store<ApplicationState>)

  pegi13 = this.store.selectSignal(select(isPegi13))
}
