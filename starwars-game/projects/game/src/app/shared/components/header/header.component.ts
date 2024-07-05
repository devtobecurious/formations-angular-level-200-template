import { Component, inject, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from 'search';
import { StatisticsBusiness } from '../../../features/statistics/services/statistics.business';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private readonly business = inject(StatisticsBusiness);
  nbItems$$ = toSignal(this.business.getNbItems());
}

// SCAM
@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {

}
