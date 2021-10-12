import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiComponent } from './test-di/test-di.component';
import { TestService } from '../../../shared/services/test.service';
import { TestDiChildComponent } from './test-di-child/test-di-child.component';



@NgModule({
  declarations: [
    TestDiComponent,
    TestDiChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestDiComponent
  ],
  providers: [
    // TestService
  ]
})
export class TestModule { }
