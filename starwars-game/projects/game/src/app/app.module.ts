import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { FightPromObsComponent } from './learnings/fight-prom-obs/fight-prom-obs.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './features/game/store/games.effects';
import { initializeApp } from './core/initializers';
import { AppInitService } from './core/initializers/services/app-init.service';
import { GameBusiness } from './features/game/services/game.business';


@NgModule({
  declarations: [
        AppComponent,
        // HeaderComponent,
        SideBarComponent
  ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FightPromObsComponent,
        GameModule,
        StoreModule.forRoot(reducers, {
      metaReducers
    }),
        EffectsModule.forRoot([GamesEffects])],
    providers: [
      AppInitService,
      { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService, GameBusiness], multi: true},
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
