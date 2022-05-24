import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../tools/hightlight';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  check() {
    hightlight(this.el);
  }

}
