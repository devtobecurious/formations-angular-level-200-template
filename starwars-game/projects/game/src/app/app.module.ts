import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { FormsModule } from '@angular/forms';
import { ServiceUnService } from './shared/services/service-un.service';
import { HeadModule } from './shared/components/head/head.module';
import { PeopleModule } from './features/people/people.module';
import { ModelsAndInterfacesComponent } from './shared/components/models-and-interfaces/models-and-interfaces.component';
import { DiscoverObservablesComponent } from './shared/components/discover-observables/discover-observables.component';
import { OperatorsComponent } from './shared/components/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ModelsAndInterfacesComponent,
    DiscoverObservablesComponent,
    OperatorsComponent
   // HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GameModule,
    HeadModule,
    PeopleModule
  ],
  providers: [
    // ServiceUnService
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
