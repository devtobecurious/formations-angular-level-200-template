import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  id : number;

  constructor(private httpClient: HttpClient) {
    this.id = Math.floor(Math.random() * 100);
    console.info('PlayerService constructor', this.id);
  }

  save(player: {surname: string, typeForce: string, weapon: string, picture: string}): Observable<{surname: string, typeForce: string, weapon: string, picture: string}> {
    console.log('save player', player);
    return this.httpClient.post<{surname: string, typeForce: string, weapon: string, picture: string}>('http://localhost:3000/players', player);
  }
}
