import { Component, OnInit } from '@angular/core';
import { TestService } from 'projects/game/src/app/shared/services/test.service';

@Component({
  selector: 'game-test-di',
  templateUrl: './test-di.component.html',
  styleUrls: ['./test-di.component.css'],
  providers: [
    TestService
  ]
})
export class TestDiComponent implements OnInit {
  valeurKey = '';

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.valeurKey = this.test.key.toString();
  }

}
