import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStatComponent } from './list-stat/list-stat.component';

const routes: Routes = [
  {
    path: '', // route par défaut du module lazy
    component: ListStatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatRoutingModule { }
