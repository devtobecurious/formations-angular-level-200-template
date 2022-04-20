import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-side-child-child-one',
  templateUrl: './dark-side-child-child-one.component.html',
  styleUrls: ['./dark-side-child-child-one.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DarkSideChildChildOneComponent implements OnInit {

  _item !: { i: number};

  @Input() set item(value: { i: number}) {
    this._item = value;

    console.info('DarkSideChildChildOneComponent.set.item', this._item);
  }

  get item(): { i: number} {
    console.info('DarkSideChildChildOneComponent.get.item', this._item);
    return this._item;
  }


  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    console.info('DarkSideChildChildOneComponent.sayHello', this._item);
  }
}
