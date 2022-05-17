import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'game-example-lifecycle',
  templateUrl: './example-lifecycle.component.html',
  styleUrls: ['./example-lifecycle.component.css']
})
export class ExampleLifecycleComponent implements OnInit, OnChanges {

  constructor() {
    console.info('ExampleLifecycleComponent.constructor()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('ExampleLifecycleComponent.ngOnChanges()');
  }

  ngOnInit(): void {
    console.info('ExampleLifecycleComponent.ngOnInit()');
  }

  maFonction() {
    console.info('ExampleLifecycleComponent.maFonction()');
  }

}
