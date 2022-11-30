import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserModule } from './features/admin-user/admin-user.module';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { LabelTextboxComponent } from './shared/components/label-textbox/label-textbox.component';
import { SearchComponent } from './shared/ui/search/search.component';
import { DiscoverObservableComponent } from './shared/learning/discover-observable/discover-observable.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { GridContainerModule } from './shared/ui/grid-container/grid-container.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DiscoverObservableComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchComponent,
    GameModule,
    GridContainerModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
