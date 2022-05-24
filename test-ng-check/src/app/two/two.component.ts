import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

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

  check() {
    hightlight(this.el);
  }

}
