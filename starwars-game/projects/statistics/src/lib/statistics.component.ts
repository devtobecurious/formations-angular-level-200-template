import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [],
  template: `
    <table>
      @for (item of statistics; track $index) {
        <tr>
          <td>
            {{ item.month }}
          </td>
        </tr>
      }
    </table>
  `,
  styles: ``
})
export class StatisticsComponent implements OnInit {
  private fake = [{month: 5, year: 2024, nbSuccess: 0, nbFailed: 50}]
  statistics$ = of(this.fake)
  statistics: {month: number, year: number, nbSuccess: number, nbFailed: number}[] = [];

  ngOnInit(): void {
    this.statistics$.subscribe(items => this.statistics = items)

  }
}
