import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-side-child-two',
  templateUrl: './dark-side-child-two.component.html',
  styleUrls: ['./dark-side-child-two.component.css']
})
export class DarkSideChildTwoComponent implements OnInit {
  _item !: { i: number};

  @Input() set item(value: { i: number}) {
    this._item = value;

    console.info('DarkSideChildTwoComponent.set.item', this._item);
  }

  get item(): { i: number} {
    console.info('DarkSideChildTwoComponent.get.item', this._item);
    return this._item;
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeItem() {
    this.item.i += 10;
  }
}
