import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'lib-ma-lib',
  template: `
    <p>
      ma-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MaLibComponent {

}

@NgModule({
  declarations: [
    MaLibComponent
  ],
  imports: [
  ],
  exports: [
    MaLibComponent
  ]
})
export class MaLibModule { }
