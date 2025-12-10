import { Component, inject, linkedSignal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../../store/application.state';
import { selectProfileLoading, selectProfileNotEmpty } from '../../store/profile.selectors';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.html',
  styleUrl: './update-profile.css',
})
export class UpdateProfile {
  private readonly store = inject(Store<ApplicationState>);

  // protected readonly profileToDisplay = this.store.pipe(
  //   select(selectProfileNotEmpty)
  // );

  protected readonly profileSignalReadonly = this.store.selectSignal(
    selectProfileNotEmpty
  );

  readonly writableSignal = linkedSignal(this.profileSignalReadonly);
  protected readonly profileForm = form(this.writableSignal);

  protected isLoadingSignal = this.store.selectSignal(selectProfileLoading);
}
