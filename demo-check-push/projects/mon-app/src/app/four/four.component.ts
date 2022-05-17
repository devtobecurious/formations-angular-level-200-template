import { Component, ElementRef, OnInit } from '@angular/core';
import { highlight } from '../shared/tools';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  doCheck() {
    highlight(this.el);
  }
}
