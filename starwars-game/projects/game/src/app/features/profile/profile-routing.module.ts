import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EditProfileComponent
  },
  // {
  //   path: 'detail',
  //   component: EditProfileComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
