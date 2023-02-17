import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderComponentModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ProfileModule } from './features/profile/profile.module';
import { CapitalizeFirstCharPipe } from './shared/tools/ui/capitalize-first-char.pipe';
import { AutourObservableComponent } from './learnings/autour-observable/autour-observable.component';
import { SearchService } from './shared/components/search/services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HeaderComponent, seuls les standalone sont à importer
    HeaderComponentModule,
    GameModule,
    AutourObservableComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent] // Treenodes initiaux => detect changes séparés
})
export class AppModule { }
