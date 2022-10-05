import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SearchComponent } from './shared/ui/components/search/search.component';
import { SearchService } from './shared/ui/components/search/search.service';
import { GridSpecialComponent } from './shared/ui/components/grid-special/grid-special.component';
import { RowSpecialComponent } from './shared/ui/components/row-special/row-special.component';
import { MesObservablesComponent } from './shared/discover/mes-observables/mes-observables.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    GridSpecialComponent,
    RowSpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchComponent,
    MesObservablesComponent,
    GameModule
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
