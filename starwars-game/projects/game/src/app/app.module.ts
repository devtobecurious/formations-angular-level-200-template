import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { StatsListComponent } from './features/stats/components/stats-list/stats-list.component';


@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        SideBarComponent
    ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //StatsListComponent,
        GameModule],
  providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
