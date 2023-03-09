import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export function loadWookies(): Observable<unknown> {
  const httpClient = inject(HttpClient);
  return httpClient.get<unknown>('');
}
