import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
// import { StatisticsBusiness } from 'statistics';

@Component({
  selector: 'game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef)
  title = 'game';
  // private readonly statsBusiness = inject(StatisticsBusiness)

  ngOnInit(): void {
    // this.cdr.detach()
    // this.cdr.detectChanges()
    //this.cdr.reattach()
  }

  initialize(): void {
    // this.statsBusiness.initialize()
  }
}
