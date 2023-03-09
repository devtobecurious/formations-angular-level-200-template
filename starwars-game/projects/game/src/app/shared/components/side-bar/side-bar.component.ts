import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
}


@NgModule({
  declarations: [SideBarComponent],
  exports: [SideBarComponent]
})
export class SideBarModule {
}
