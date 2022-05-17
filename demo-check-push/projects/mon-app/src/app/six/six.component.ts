import { Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }
}
