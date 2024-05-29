import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ ignoreChangesOutsideZone: true,  eventCoalescing: true }),
    provideHttpClient(withInterceptors([])),
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
};
