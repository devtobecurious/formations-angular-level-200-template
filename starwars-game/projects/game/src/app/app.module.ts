import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { FightPromObsComponent } from './learnings/fight-prom-obs/fight-prom-obs.component';


@NgModule({
  declarations: [
        AppComponent,
        // HeaderComponent,
        SideBarComponent
  ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FightPromObsComponent,
        GameModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
