import { Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }
}
