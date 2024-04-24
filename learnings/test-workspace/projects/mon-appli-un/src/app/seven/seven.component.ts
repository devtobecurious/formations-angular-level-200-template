import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-seven',
  standalone: true,
  imports: [],
  templateUrl: './seven.component.html',
  styleUrl: './seven.component.css'
})
export class SevenComponent {
  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight('SevenComponent', this.el);
  }
}
