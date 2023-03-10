import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent, SideBarModule } from './shared/components/side-bar/side-bar.component';
import { PopinComponent } from './shared/ui/popin/popin.component';
import { AutourObservablesComponent } from './features/learnings/autour-observables/autour-observables.component';
import { TimerComponent } from './features/learnings/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SideBarModule,
    // GameModule, => car va etre lazy loadé
    PopinComponent,
    AutourObservablesComponent,
    TimerComponent
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
