import { ProfileService } from './features/user/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { UserBis } from './core/models/user';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game';
  displayKey = '';
  users: UserBis[] = [];

  /**
   *
   */
  constructor(private profileService: ProfileService) {
    this.displayKey = this.profileService.key.toString();
  }
  ngOnInit(): void {
    this.profileService.getAll().subscribe(item => this.users = item);
  }
}
