import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { mainRoutes } from './app/routes';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
const providers = [
  provideRouter(mainRoutes),
  provideHttpClient(),
];


bootstrapApplication(AppComponent, { providers }).then(application => {
  console.info('L\'appli est chargée');
});
