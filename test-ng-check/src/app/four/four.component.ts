import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  check() {
    hightlight(this.el);
  }
}
