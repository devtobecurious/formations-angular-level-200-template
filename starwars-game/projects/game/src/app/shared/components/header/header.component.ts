import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from 'search';

@Component({
    selector: 'game-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SearchComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { } // SCAM
