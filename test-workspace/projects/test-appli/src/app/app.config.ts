import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NoPreloading, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideHttpClient(withInterceptors([])),
              provideRouter(routes, withPreloading(NoPreloading))]
};
