import { Component, OnInit } from '@angular/core';
import { ServiceUnService } from '../../services/service-un.service';

@Component({
  selector: 'game-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [
    ServiceUnService
  ]
})
export class HeadComponent implements OnInit {
  width = 0;

  constructor(private service: ServiceUnService) { }

  ngOnInit(): void {
    this.width = this.service.width;
  }

}
