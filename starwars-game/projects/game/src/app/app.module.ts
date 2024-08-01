import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { GamesEffects } from './features/game/store/games.effects';
import { DiscoverSignalComponent } from './learnings/discover-signal/discover-signal.component';
import { metaReducers, reducers } from './reducers';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';


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
        // FightPromObsComponent,
        GameModule,
        DiscoverSignalComponent,
        StoreModule.forRoot(reducers, {
      metaReducers
    }),
        EffectsModule.forRoot([GamesEffects])],
    providers: [
      // AppInitService,
      // { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true},
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
