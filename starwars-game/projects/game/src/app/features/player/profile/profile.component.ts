import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';
import { LoggerService } from '../../../shared/services/logger.service';
import { ProfileService } from '../services/profile.service';


const service: ProfileService = {

}

class FakeService extends ProfileService {
  constructor() {
    super();
  }
}


@Component({
  selector: 'game-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    //{ provide: ProfileService, useValue: service }
    //{ provide: ProfileService, useClass: FakeService }
    { provide: ProfileService, useFactory: () => environment.production ? ProfileService : FakeService }
  ]
})
export class ProfileComponent implements OnInit {
  @Output() monEvent = new EventEmitter();

  constructor(private service: ProfileService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('ah que coucou');
  }

}
