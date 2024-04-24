import { Component, ElementRef } from '@angular/core';
import { hightlight } from '../hightlight';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [],
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent {
  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight('FourComponent', this.el);
  }
}
