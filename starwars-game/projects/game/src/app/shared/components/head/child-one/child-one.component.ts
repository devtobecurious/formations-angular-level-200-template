import { Component, OnInit } from '@angular/core';
import { ServiceUnService } from '../../../services/service-un.service';

@Component({
  selector: 'game-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  width = 0;

  constructor(private service: ServiceUnService) { }

  ngOnInit(): void {
    this.width = this.service.width;
  }

}
