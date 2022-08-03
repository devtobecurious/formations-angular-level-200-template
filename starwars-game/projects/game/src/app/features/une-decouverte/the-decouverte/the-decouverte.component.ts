import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-the-decouverte',
  templateUrl: './the-decouverte.component.html',
  styleUrls: ['./the-decouverte.component.css']
})
export class TheDecouverteComponent implements OnInit {

  constructor(public app: ApplicationRef) { }

  ngOnInit(): void {
  }

}
