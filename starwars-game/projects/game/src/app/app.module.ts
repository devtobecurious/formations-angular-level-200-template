import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { PlayerModule } from './features/player/player.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ClockModule } from './shared/ui/components/clock/clock.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule,
    PlayerModule,
    ClockModule
  ],
  providers: [
     // PlayerService
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
