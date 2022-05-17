import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit {

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }
}
