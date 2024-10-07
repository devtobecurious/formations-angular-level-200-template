import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[gameBoolToColor]',
    standalone: true
})
export class BoolToColorDirective {
  private _success = false;

  constructor(private element: ElementRef) { }

  @Input()
  set gameBoolToColor(value: boolean) {
    this._success = value;

    let color = 'red';
    if (this._success) {
      color = 'green';
    }

    this.element.nativeElement.style.color = color;
  }

}
