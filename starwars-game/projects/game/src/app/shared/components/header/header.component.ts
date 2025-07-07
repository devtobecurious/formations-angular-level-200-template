import { Component, NgModule, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../libs/uis/search-bar/search-bar.component';

@Component({
    selector: 'game-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchBarComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
