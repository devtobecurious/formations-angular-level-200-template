import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'game-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
