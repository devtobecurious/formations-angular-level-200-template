import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from 'projects/game/src/app/shared/services/test.service';

@Component({
  selector: 'game-test-di-child',
  templateUrl: './test-di-child.component.html',
  styleUrls: ['./test-di-child.component.css']
})
export class TestDiChildComponent implements OnInit {
  key: number = 0;
  // @Output() public monEvent = new EventEmitter();

  constructor(private test: TestService) { }

  ngOnInit(): void {
    this.key = this.test.key;
  }

}
