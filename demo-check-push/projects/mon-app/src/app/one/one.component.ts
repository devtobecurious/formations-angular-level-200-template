import { Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }

}
