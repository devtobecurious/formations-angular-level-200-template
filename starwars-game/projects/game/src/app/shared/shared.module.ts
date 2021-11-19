import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DiscoverObservablesComponent } from './components/discover-observables/discover-observables.component';
import { OperatorsComponent } from './components/operators/operators.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
