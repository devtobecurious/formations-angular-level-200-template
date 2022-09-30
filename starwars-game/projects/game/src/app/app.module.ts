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
    GameModule,
   //  ProfileModule,
    CheckBoxComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
