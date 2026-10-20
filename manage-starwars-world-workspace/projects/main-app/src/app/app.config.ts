import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { CustomPreloadingStrategyMobile } from './shared/tools/routes/custom-preloading-strategy.mobile';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(CustomPreloadingStrategyMobile))
  ],
};
