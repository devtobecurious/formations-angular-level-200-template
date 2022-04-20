import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dark-side-one',
  templateUrl: './dark-side-one.component.html',
  styleUrls: ['./dark-side-one.component.css']
})
export class DarkSideOneComponent implements OnInit {
  childs: {i: number}[] = [];


  constructor() {
    for (let index = 0; index < 1; index++) {
      this.childs.push({
        i: index
      });

    }

  }

  ngOnInit(): void {
  }

}
