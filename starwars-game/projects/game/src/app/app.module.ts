import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './features/game/store/games.effects';


@NgModule({ declarations: [
        AppComponent,
        SideBarComponent
    ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
    imports: [BrowserModule, AppRoutingModule, GameModule, HeaderModule, StoreModule.forRoot(reducers, {
      metaReducers
    }), EffectsModule.forRoot([GamesEffects])],
    providers: [
      provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
