import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatInfrastructureService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<string[]> {
    return this.httpClient.get<string[]>('url en dur');
  }
}
