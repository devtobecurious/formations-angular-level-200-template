import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { FourComponent } from '../four/four.component';
import { FivComponent } from '../fiv/fiv.component';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FourComponent, FivComponent],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent {
  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}


  cdCheck() {
    hightlight('TwoComponent', this.el);
  }
}
