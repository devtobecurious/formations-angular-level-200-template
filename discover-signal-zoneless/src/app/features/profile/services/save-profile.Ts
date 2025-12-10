import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from "../models/profile";
import { inject } from '@angular/core';

export class SaveProfile {
  private readonly httpClient = inject(HttpClient);

  saveOne(profile: Profile): Observable<Profile> {
    return this.httpClient.post<Profile>('api/profiles', profile);
  }
}
