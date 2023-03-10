import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePeopleComponent } from './pages/page-people/page-people.component';


const routes: Routes = [{
  path: '',
  component: PagePeopleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
