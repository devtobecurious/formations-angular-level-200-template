import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkSideOneComponent } from './dark-side-one/dark-side-one.component';

const routes: Routes = [{
  path: '',
  component: DarkSideOneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarkSideRoutingModule { }
