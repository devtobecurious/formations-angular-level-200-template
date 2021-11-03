import { ProfileService } from './../../features/user/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css'],
  providers: [ ProfileService ]
})
export class TestOneComponent implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
  }

}
