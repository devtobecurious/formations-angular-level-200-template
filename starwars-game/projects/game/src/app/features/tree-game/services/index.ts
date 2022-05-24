import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type TreeItemType = {
  records: [
    {
      recordid: string,
      fields: {
        famille: string,
        gid: number,
        tranche_age: string,
        diametre: number
      }
    }
  ]
}

export interface TreeItem {id: string, age: string, diametre: number, familles: string};

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<TreeItem[]> {
    return this.httpClient.get<TreeItemType>(api.tree.url)
    .pipe(
      map(response =>
         response.records.map(item => {
          const result: TreeItem = {
            id: item.fields.gid.toString(),
            age: item.fields.tranche_age,
            diametre: item.fields.diametre,
            familles: item.fields.famille
          };

          return result;
        }))
    );
  }
}
