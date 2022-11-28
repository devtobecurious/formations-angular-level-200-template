import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaLibModule } from 'toto';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
