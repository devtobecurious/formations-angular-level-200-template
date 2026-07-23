import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GetAllStatsBusinnessService } from '../../services/get-all-stats-businness.service';
import { DisplayOneStatResumeComponent } from '../display-one-stat-resume/display-one-stat-resume.component';
import { GetAllStatsInfraService } from '../../services/get-all-stats-infra.service';
import { FakeGetAllStatsInfraService } from '../../services/__fake__/get-all-stats-infra.service.fake';

@Component({
  selector: 'lib-display-all-stats',
  imports: [AsyncPipe, DisplayOneStatResumeComponent],
  templateUrl: './display-all-stats.component.html',
  styleUrl: './display-all-stats.component.css',
  providers: [
    GetAllStatsBusinnessService, 
//    { provide: GetAllStatsInfraService, useClass: FakeGetAllStatsInfraService }
{ provide: GetAllStatsInfraService, useFactory: () => new FakeGetAllStatsInfraService() }
  ]
})
export class DisplayAllStatsComponent implements OnInit {
  protected readonly stat$ = inject(GetAllStatsBusinnessService).getAll();

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
