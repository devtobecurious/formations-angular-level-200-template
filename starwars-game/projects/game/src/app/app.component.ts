import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ObsVsPromiseComponent } from './learnings/obs-vs-promise/obs-vs-promise.component';
import { HttpClient } from '@angular/common/http';
import { TestLibAvecServiceService } from 'projects/test-lib-avec-service/src/public-api';
import { ceQueJinjectToutLeTemps } from './shared/services/main.services';
import { BaseComponent } from './shared/components/base.component';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet, HeaderModule, SideBarComponent, ObsVsPromiseComponent],
    providers: [
      //{ provide: StateStoreService, useClass: TestLibAvecServiceService }
    ]
})
export class AppComponent extends BaseComponent {
  title = 'game';
  private readonly monInjecter = ceQueJinjectToutLeTemps
  list$ = this.monInjecter.http.get('dffd');
  list2$ = this.http.get('dfsd')
}
