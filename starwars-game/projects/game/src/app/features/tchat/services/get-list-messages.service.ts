import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListMessagesService {
  private readonly httpClient = inject(HttpClient)

  getAll(): Observable<string[]> {
    return this.httpClient.get<string[]>('https://api.example.com/messagesList');
  }
}
