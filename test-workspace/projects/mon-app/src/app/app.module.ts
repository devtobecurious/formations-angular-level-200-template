import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaLibModule } from 'ma-lib-essai';
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
