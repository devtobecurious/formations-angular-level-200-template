import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ ignoreChangesOutsideZone: true,  eventCoalescing: true }),
    provideHttpClient(withInterceptors([])),
    provideRouter(routes)
  ]
};
