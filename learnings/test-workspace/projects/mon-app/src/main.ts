import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  // function compute(a: number, b: number): number {
  //   //document.getElementById('test')?.innerText = 'hello'
  //   return a + b
  // }

  // compute(1, 2) => 3
