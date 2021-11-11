import { ProfileService } from './features/user/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { UserBis } from './core/models/user';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private profileService: ProfileService,
              private translateService: TranslateService) {
    this.displayKey = this.profileService.key.toString();

    this.translateService.use('en');
  }
  ngOnInit(): void {
    this.profileService.getAll().subscribe(item => this.users = item);
  }

  generateTitle() {
    console.info('generateTitle');
    return 'Hello';
  }
}
