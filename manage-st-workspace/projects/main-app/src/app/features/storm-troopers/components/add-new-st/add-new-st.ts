import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { AddStormTrooper, stSchema } from '../../models/storm-trooper';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-add-new-st',
  styleUrl: './add-new-st.css',
  templateUrl: './add-new-st.html',
})
export class AddNewSt {
  private readonly stormTrooper = signal<AddStormTrooper>({color: '', matricule: ''});
  private readonly stForm = form(this.stormTrooper, stSchema);

  save(): void {
    if(this.stForm().valid()) {
      const item = this.stormTrooper();
      const itemBis = this.stForm().value();
    }
  }
}
