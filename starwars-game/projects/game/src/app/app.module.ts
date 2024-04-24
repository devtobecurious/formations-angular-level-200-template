import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { PromiseVsObservableComponent } from './learnings/promise-vs-observable/promise-vs-observable.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent, : va devenir un scam
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    PromiseVsObservableComponent,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent] // < angular 16
})
export class AppModule { }
