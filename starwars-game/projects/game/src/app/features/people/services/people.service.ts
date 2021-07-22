import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { PersonDTO } from '../../../core/models/person.dto';
import { map } from 'rxjs/operators';

export declare type PersonApiResult = {
  results: [
    {
      name: string,
      eye_color: string,
      gender: string
    }
  ]
};

const unObjet: PersonApiResult = {
  results: [
    {
      name: '',
      eye_color: '',
      gender: ''
    }
  ]
}




@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PersonDTO[]> {
    return this.httpClient.get<PersonApiResult>(api.people.url).pipe(
      map(result => {
        let array: PersonDTO[] = [];

        array = result.results.map(item => ({
          surname: item.name.split(' ')[0],
          colorEye: item.eye_color,
          gender: item.gender
        }));

        return array;
      })
    );
  }
}
