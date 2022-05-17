import { Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }
}
