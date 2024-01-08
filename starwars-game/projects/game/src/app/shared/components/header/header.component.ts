import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from 'search';
import { CountryComponent } from '../../../weather/country/country.component';
import { CitiesComponent } from '../../../weather/cities/cities.component';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    SearchComponent,
    CountryComponent,
    CitiesComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
