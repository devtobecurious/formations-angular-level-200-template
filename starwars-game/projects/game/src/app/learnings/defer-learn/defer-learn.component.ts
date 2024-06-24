import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { PanierComponent } from '../../features/panier/panier.component';

@Component({
  selector: 'game-defer-learn',
  standalone: true,
  imports: [PanierComponent],
  templateUrl: './defer-learn.component.html',
  styleUrl: './defer-learn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferLearnComponent {
  list = [1, 2, 10, 5];
  display$$ = signal(false);

  private cd = inject(ChangeDetectorRef)

  toDisplay(): void {
    this.display$$.set(true)
  }


}
