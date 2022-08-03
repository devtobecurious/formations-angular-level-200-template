import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TheDecouverteComponent } from './the-decouverte/the-decouverte.component';

const routes: Routes = [{
  path: 'un',
  component: TheDecouverteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UneDecouverteRoutingModule { }
