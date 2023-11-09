import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderComponentModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { RappelsObsVsPromiseComponent } from './learnings/rappels-obs-vs-promise/rappels-obs-vs-promise.component';
import { ZoneAndCoComponent } from './learning/zone-and-co/zone-and-co.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponentModule,
    GameModule,
    RappelsObsVsPromiseComponent,
    ZoneAndCoComponent
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
