import { Component, computed, inject, linkedSignal } from '@angular/core';
import { RebelBusiness } from '../../services/rebel.business';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { form, FormField, FormRoot } from '@angular/forms/signals';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-edit-rebel',
  styleUrl: './edit-rebel.css',
  templateUrl: './edit-rebel.html',
})
export class EditRebel {
  private readonly service = inject(RebelBusiness);
  protected readonly item = this.service.getOne();
  protected readonly editItem = linkedSignal(this.item);
  protected readonly editForm = form(this.editItem);
}
