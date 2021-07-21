import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../player/services/profile.service';

@Component({
  selector: 'game-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css'],

})
export class Profile2Component implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
  }

}
