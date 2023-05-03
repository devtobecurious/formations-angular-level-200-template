import { mainRoutes } from './app/routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(mainRoutes, withDebugTracing()),
    provideHttpClient()
  ]
});
