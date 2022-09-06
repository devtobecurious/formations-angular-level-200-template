import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { environment } from 'projects/game/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterDto } from '../models/player';

export type ApiResult = {
  results:[
    {
      name: string
    }
  ]
}

export const ConvertToItems = (fromApi:ApiResult) => fromApi.results.map(resultItem => ({ prenom: resultItem.name })) ;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  addOne(character: CharacterDto): Observable<CharacterDto> {
    return this.httpClient.post<CharacterDto>(api.profile.url, character);
  }

  getAll(): Observable<CharacterDto[]> {
    return this.httpClient.get<ApiResult>(api.profile.urlPublic)
    .pipe(
      map( ConvertToItems )
    );
  }


}




