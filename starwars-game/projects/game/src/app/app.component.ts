import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ObsVsPromiseComponent } from './learnings/obs-vs-promise/obs-vs-promise.component';
import { HttpClient } from '@angular/common/http';
import { TestLibAvecServiceService } from 'projects/test-lib-avec-service/src/public-api';
import { ceQueJinjectToutLeTemps } from './shared/services/main.services';
import { BaseComponent } from './shared/components/base.component';
import { GameApplication } from './features/game/services/game.application';

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
  private readonly gameApplication = inject(GameApplication)
  title = 'game';
  // private readonly monInjecter = ceQueJinjectToutLeTemps
  // list$ = this.monInjecter.http.get('dffd');
  // list2$ = this.http.get('dfsd')

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gameApplication.initialize();

  }
}
