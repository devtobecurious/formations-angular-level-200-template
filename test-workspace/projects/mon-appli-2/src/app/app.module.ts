import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerModule } from 'player';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
