import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-side-child-one',
  templateUrl: './dark-side-child-one.component.html',
  styleUrls: ['./dark-side-child-one.component.css']
})
export class DarkSideChildOneComponent implements OnInit {
  _item !: { i: number};

  @Input() set item(value: { i: number}) {
    this._item = value;

    console.info('DarkSideChildOneComponent.set.item', this._item);
  }

  get item(): { i: number} {
    console.info('DarkSideChildOneComponent.get.item', this._item);
    return this._item;
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeItem() {
    this.item.i += 10;
  }
}
