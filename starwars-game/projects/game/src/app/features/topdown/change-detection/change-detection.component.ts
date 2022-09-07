import { ApplicationRef, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  @Output() eventla = new EventEmitter()


  constructor(public app: ApplicationRef) { }

  ngOnInit(): void {
  }
}
