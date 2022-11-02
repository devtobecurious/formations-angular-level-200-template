import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-discover-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-obs.component.html',
  styleUrls: ['./discover-obs.component.css']
})
export class DiscoverObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('0000000000000000000000000000000000');

    const prom = new Promise((resolve, reject) => {
      console.info('00. PROMESSE');
    });

    const obs$ = new Observable(observer => {
      console.info('00. OBSERVABLE');
    });
    obs$.subscribe();
    obs$.subscribe();

    console.info('****************************************');
  }

}
