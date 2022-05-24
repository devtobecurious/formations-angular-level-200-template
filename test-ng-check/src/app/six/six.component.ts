import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  check() {
    hightlight(this.el);
  }

}
