import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { StatsComponent } from 'stats';

@NgModule({ declarations: [
        AppComponent,
        SideBarComponent
    ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
    providers: [provideCharts(withDefaultRegisterables()), provideHttpClient(withInterceptorsFromDi())],
    imports: [BrowserModule,
        AppRoutingModule,
        GameModule,
        HeaderModule,
        SideBarComponent
      ]
})
export class AppModule { }
