import { ApplicationState } from './../../../../store/application.state';
import { Component, inject, signal } from '@angular/core';
import { GetAllVideoGames } from '../../services/get-all-video-games';
import { Store } from '@ngrx/store';
import { createProfileAction } from '../../store/profile.actions';
import { Profile } from '../../models/profile';
import { initialProfileState } from '../../store/profile.state';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.html',
  styleUrl: './create-profile.css',
  providers: [GetAllVideoGames]
})
export class CreateProfile {
  private readonly getAllVideoGames = inject(GetAllVideoGames);
  protected readonly videoGamesSignal = this.getAllVideoGames.summaryListSignal;
  private readonly store = inject(Store<ApplicationState>);

  private readonly profile = signal<Profile | undefined>(initialProfileState.item);
  protected profileForm = form(this.profile);

  save(): void {
    const item = this.profileForm().value();
    this.store.dispatch(createProfileAction({ item })); // optimistic update
  }
}
