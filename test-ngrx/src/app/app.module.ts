import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ListStatsComponent } from './features/statistics/list-stats/list-stats.component';
import { EffectsModule } from '@ngrx/effects';
import { StatsEffect } from './features/statistics/store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    ListStatsComponent,
    EffectsModule.forRoot([StatsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
