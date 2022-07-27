import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnemyListComponent } from './enemy-list/enemy-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EnemyListComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnemyRoutingModule { }
