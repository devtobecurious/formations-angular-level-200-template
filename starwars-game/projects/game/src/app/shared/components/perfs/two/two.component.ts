import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight } from '../../../tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Put push to see the changes
})
export class TwoComponent implements OnInit {

  ngOnInit(): void {
   //  this.cd.detach();

   this.zone.runOutsideAngular(() => {

   });
  }

  forceAttach(): void {
    this.cd.reattach();
  }

  constructor(private el: ElementRef,
              public cd: ChangeDetectorRef,
              private zone: NgZone) {}

  cdCheck() {
    hightlight(this.el);
  }

  //does not work for all the cases
  ngDoCheck() {
    console.log('ngDoCheck')
  }

  //does not work for all the cases
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

}
