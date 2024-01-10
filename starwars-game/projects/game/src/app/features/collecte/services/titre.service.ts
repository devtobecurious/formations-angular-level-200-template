import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TitreService {
  titre = signal<string>('');
}
