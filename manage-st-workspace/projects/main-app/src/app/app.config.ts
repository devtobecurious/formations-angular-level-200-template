import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideHttpClient(),
    provideBrowserGlobalErrorListeners(), 
    provideRouter(routes, withPreloading(PreloadAllModules))
  ],
};
