import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  user = { prenom: 'Han solo' };
  userStore = signal(this.user);

  updatePrenom(prenom: string): void {
    this.userStore.set({
      prenom
    });
  }

}
