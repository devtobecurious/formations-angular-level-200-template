import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'game-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
}


@NgModule({
  declarations: [SideBarComponent],
  imports: [
    RouterModule
  ],
  exports: [SideBarComponent]
})
export class SideBarModule {
}
