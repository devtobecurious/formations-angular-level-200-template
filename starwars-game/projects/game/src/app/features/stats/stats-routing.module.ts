import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsListComponent } from './stats-list/stats-list.component';

const routes: Routes = [
  {
    path: '',
    component: StatsListComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
