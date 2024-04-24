import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [],
  templateUrl: './six.component.html',
  styleUrl: './six.component.css'
})
export class SixComponent {
  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight('SixComponent', this.el);
  }
}
