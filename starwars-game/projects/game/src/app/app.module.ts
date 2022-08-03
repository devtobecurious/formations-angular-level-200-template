import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerLibModule } from 'player-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './features/test/test.component';
import { TestTimerComponent } from './features/timers/test-timer/test-timer.component';
import { UneDecouverteModule } from './features/une-decouverte/une-decouverte.module';
import { UserModule } from './features/user/user.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ContainerModule } from './shared/ui/components/container/container.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UneDecouverteModule,
    FormsModule,
    ContainerModule,
    PlayerLibModule,
    // GameModule,
    UserModule,
    TestComponent,
    TestTimerComponent
  ],
  providers: [
    // SearchService
    // { provide: SearchService, useClass: SearchService }
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
