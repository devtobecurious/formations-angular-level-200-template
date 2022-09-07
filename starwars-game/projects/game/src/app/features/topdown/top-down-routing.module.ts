import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

const routes: Routes = [{
  path: 'topdown',
  component: ChangeDetectionComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopDownRoutingModule { }
