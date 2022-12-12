import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { MaLibModule } from 'ma-lib';
import { MaLibModule } from 'maLibrarie';

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
