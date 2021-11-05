import { FormsModule } from '@angular/forms';
import { environment } from './../../../mobile-game/src/environments/environment';
import { LoggerService, Logger2 } from './shared/services/logger.service';
import { UserModule } from './features/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { ProfileService } from './features/user/services/profile.service';
import { TestOneComponent } from './shared/test-one/test-one.component';
import { ChildOneComponent } from './shared/child-one/child-one.component';
import { RxjsDiscoverComponent } from './shared/rxjs-discover/rxjs-discover.component';
import { RxjsPipeAsyncComponent } from './shared/rxjs-pipe-async/rxjs-pipe-async.component';
import { ConcatMergeMapComponent } from './shared/concat-merge-map/concat-merge-map.component';
import { CountClickComponent } from './shared/count-click/count-click.component';

const initializeApp = () => {
  return new Promise((resolve, reject) => {
    //fetch()
    resolve('v1.1');
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    TestOneComponent,
    ChildOneComponent,
    RxjsDiscoverComponent,
    RxjsPipeAsyncComponent,
    ConcatMergeMapComponent,
    CountClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GameModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    },
    //ProfileService
    //{ provide: LoggerService, useClass: Logger2 }
    { provide: LoggerService, useFactory: () => { return environment.production ? {} :  new Logger2(); } }
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
