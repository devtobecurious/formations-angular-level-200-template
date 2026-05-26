import { inject, Injectable } from '@angular/core';
import { GetAllStatsInfraService } from '../infra/get-all-stats.infra.service';
import { Observable } from 'rxjs';
import { Stats } from '../../models/stat';

@Injectable()
export class GetAllStatsBusinessService {
  private readonly infra = inject(GetAllStatsInfraService);
  private readonly statsFromInfra$ = this.infra.getAll();

  getAll(): Observable<Stats> {
    return this.statsFromInfra$;
  }
}
