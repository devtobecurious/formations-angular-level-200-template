import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { SixComponent } from '../six/six.component';
import { SevenComponent } from '../seven/seven.component';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [SixComponent, SevenComponent],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {
  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}


  cdCheck() {
    hightlight('TwoComponent', this.el);
  }
}
