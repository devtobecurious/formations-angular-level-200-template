import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { hightlight } from '../../../shared/tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Put push to see the changes
})
export class TwoComponent implements OnInit {
  @Input() valeur = {... { name: 'jean' }}; // Passage par le parent de NOUVELLE instance / NOUVELLE reférence

  ngOnInit(): void {
  }

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}

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
