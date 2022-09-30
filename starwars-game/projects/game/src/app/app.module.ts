import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { ProfileModule } from './features/profile/profile.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { PreLoadingStrategy } from './shared/tools/routing/pre-loading-strategy';
import { CheckBoxComponent } from './shared/ui/components/check-box/check-box.component';
import { ObservablesAndPromisesComponent } from './shared/tutos/observables-and-promises/observables-and-promises.component';
import { PerfsModule } from './shared/components/perfs/perfs.module';
import { LoggerService } from './shared/services/logger.service';
import { GridPlusplusModule } from './shared/components/grid-plusplus/grid-plusplus.module';
import { FormsModule } from '@angular/forms';
import { MapPlusComponent } from './shared/components/map-plus/map-plus.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StatsModule } from './features/stats/stats.module';
import { EffectsModule } from '@ngrx/effects';
import { StatsEffect } from './features/stats/store/effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ObservablesAndPromisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GameModule,
   //  ProfileModule,
    CheckBoxComponent,
    PerfsModule,
    GridPlusplusModule,
    MapPlusComponent,
    StatsModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([StatsEffect])
  ],
  providers: [

  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
