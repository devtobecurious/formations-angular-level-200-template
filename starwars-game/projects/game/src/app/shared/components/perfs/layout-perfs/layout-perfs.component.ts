import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-layout-perfs',
  templateUrl: './layout-perfs.component.html',
  styleUrls: ['./layout-perfs.component.css']
})
export class LayoutPerfsComponent implements OnInit {

  constructor(public app: ApplicationRef) { }

  ngOnInit(): void {

  }

}
