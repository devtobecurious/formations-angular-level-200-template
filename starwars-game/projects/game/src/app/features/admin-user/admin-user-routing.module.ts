import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';

const routes: Routes = [{
  path: '',
  component: CreateProfileComponent
},
{
  path: 'list',
  component: ListProfileComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
