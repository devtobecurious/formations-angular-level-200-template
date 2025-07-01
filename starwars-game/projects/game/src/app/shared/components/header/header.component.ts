import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from 'search';

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
    imports: [SearchComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
