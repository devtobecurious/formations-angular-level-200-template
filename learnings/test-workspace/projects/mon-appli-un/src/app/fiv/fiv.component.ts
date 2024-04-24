import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-fiv',
  standalone: true,
  imports: [],
  templateUrl: './fiv.component.html',
  styleUrl: './fiv.component.css'
})
export class FivComponent {
  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight('FiveComponent', this.el);
  }
}
