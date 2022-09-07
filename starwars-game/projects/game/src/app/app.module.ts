import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { GameModule } from './features/game/game.module';
import { ProfileModule } from './features/profile/profile.module';
import { FormFieldBisComponent } from './shared/components/form-field-bis/form-field-bis.component';
import { FormFieldModule } from './shared/components/form-field/form-field.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { LoggerService } from './shared/services/logger.service';
import { ObservablesComponent } from './shared/components/observables/observables.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeaturesModule,
    // FormFieldModule,
    // FormFieldBisComponent
  ],
  providers: [
    // { provide: LoggerService, useValue: new LoggerService() }
    LoggerService
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
