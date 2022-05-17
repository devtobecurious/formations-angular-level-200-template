import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ticks',
  templateUrl: './ticks.component.html',
  styleUrls: ['./ticks.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TicksComponent implements OnInit {
  tickValue = 0;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    //this.cd.detach();

  //   setInterval(() => {
  //     this.tickValue ++;
  //     //this.cd.detectChanges();
  //       this.cd.markForCheck();
  //  }, 1000);

  interval(1000).subscribe(item => this.tickValue = item);
  }

}
