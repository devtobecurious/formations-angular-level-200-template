import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StatInfrastructureService } from '../infrastructure/stat-infrastructure.service';

@Injectable({
  providedIn: null //'root' // null// 'root'
})
export class StatApplicationService {

  constructor(private readonly infraService: StatInfrastructureService) { }

  getAll(): Observable<string[]> {
    return this.infraService.getAll().pipe(filter(items => true));
  }
}
