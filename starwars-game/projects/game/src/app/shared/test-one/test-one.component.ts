import { LoggerService } from './../services/logger.service';
import { ProfileService } from './../../features/user/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css'],
  providers: [ ProfileService ]
})
export class TestOneComponent implements OnInit {

  constructor(private service: ProfileService,
             private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('Yahoo');
  }

}
