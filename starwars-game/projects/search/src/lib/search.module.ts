import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';


// Single Component As Module
@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
