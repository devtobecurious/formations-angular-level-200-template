import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  check() {
    hightlight(this.el);
  }
}
