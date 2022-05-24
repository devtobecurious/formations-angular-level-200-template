import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  check() {
    hightlight(this.el);
  }
}
