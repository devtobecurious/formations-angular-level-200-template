import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObsVsPromiseComponent } from './learnings/obs-vs-promise/obs-vs-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsVsPromiseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
