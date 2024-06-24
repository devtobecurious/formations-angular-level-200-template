import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { HeaderModule } from './app/shared/components/header/header.component';
import { GameModule } from './app/features/game/game.module';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './app/reducers';
import { provideEffects } from '@ngrx/effects';
import { GamesEffect } from './app/features/store/games.effects';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, GameModule, HeaderModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers, { metaReducers }),
    provideEffects([GamesEffect])
]
})
  .catch(err => console.error(err));
