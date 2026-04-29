import { Component, inject } from '@angular/core';
import { UiStore } from '../../../store/ui-store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-display-data-loading',
  imports: [AsyncPipe],
  templateUrl: './display-data-loading.component.html',
  styleUrl: './display-data-loading.component.css'
})
export class DisplayDataLoadingComponent {
  protected readonly data$ = inject(UiStore).data$;
}
