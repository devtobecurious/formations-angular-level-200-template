import { ProfileService } from './../../features/user/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  displayKey = '';

  constructor(private service: ProfileService) {
    this.displayKey = this.service.key.toString();
  }

  ngOnInit(): void {
  }

}
