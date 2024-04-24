import { ApplicationRef, ChangeDetectorRef, Component, ElementRef, inject } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [TwoComponent, ThreeComponent],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  public readonly cdr = inject(ChangeDetectorRef);

  constructor(private el: ElementRef, public application: ApplicationRef) {}

  ngOnInit(): void {
    this.cdr.detach();
  }

  cdCheck() {
    hightlight('OneComponent', this.el);
  }
}
