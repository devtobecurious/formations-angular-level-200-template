import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileCreateComponent
},
{
  path: 'profiles',
  component: ProfileListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
