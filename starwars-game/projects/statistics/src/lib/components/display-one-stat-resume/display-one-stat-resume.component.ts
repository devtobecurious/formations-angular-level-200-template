import { Component, inject, input, ChangeDetectionStrategy, Input } from '@angular/core';
import { StatItem } from '../../models/stat-item';
import { GetAllStatsBusinnessService } from '../../services/get-all-stats-businness.service';
@Component({
  selector: 'lib-display-one-stat-resume',
  templateUrl: './display-one-stat-resume.component.html',
  styleUrls: ['./display-one-stat-resume.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayOneStatResumeComponent {
  private readonly business = inject(GetAllStatsBusinnessService);

  item = input.required<StatItem>();

//   @Input({ required: true })
//   item: StatItem | undefined = undefined;

}
