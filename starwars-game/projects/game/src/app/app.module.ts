import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { UserModule } from './features/user/user.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ObsAndPromiseComponent } from './shared/learn/obs-and-promise/obs-and-promise.component';
import { TextAndLabelComponent } from './shared/ui/components/text-and-label/text-and-label.component';
import { ContainerConfigService } from './shared/ui/div-container/container-config.service';
import { DivContainerComponent } from './shared/ui/div-container/div-container.component';



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
    GameModule,
    ObsAndPromiseComponent,
    DivContainerComponent
    // UserModule
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
