import { Component, inject } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RebelBusiness } from '../../services/rebel.business';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatProgressSpinnerModule, RouterLink],
  selector: 'app-display-rebels',
  styleUrl: './display-rebels.css',
  templateUrl: './display-rebels.html',
})
export class DisplayRebels {
  private readonly service = inject(RebelBusiness);
  protected readonly isLoading = this.service.asResource.isLoading;
  protected readonly items = this.service.getAll();
}
