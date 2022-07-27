import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { PlayerModule } from './features/player/player.module';

// import { PlayerModule } from 'player';
import { ProfileService } from './features/player/services/profile.service';
import { Profile2Module } from './features/profile2/profile2.module';
import { SidePartModule } from './shared/modules/side-part/side-part.module';
import { ObservablesZoomComponent } from './shared/components/observables-zoom/observables-zoom.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EnemyEffects } from './features/enemy/store/effects/enemy.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GameModule,
    PlayerModule,
    SidePartModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([
      EnemyEffects
    ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
