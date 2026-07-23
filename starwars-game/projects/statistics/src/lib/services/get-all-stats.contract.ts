import { Observable } from 'rxjs';
import { StatItemList } from '../models/stat-item';

export interface GetAllStatsContract {
  getAll(): Observable<StatItemList>;
}