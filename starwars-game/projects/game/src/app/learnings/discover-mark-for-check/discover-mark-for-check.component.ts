import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'game-discover-mark-for-check',
  standalone: true,
  imports: [],
  templateUrl: './discover-mark-for-check.component.html',
  styleUrl: './discover-mark-for-check.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverMarkForCheckComponent {
  private readonly cdr = inject(ChangeDetectorRef)
  data = 'Premier titre'

  ngOnInit(): void {
    this.updateData()
  }

  updateData() {
    setTimeout(() => {
      this.data = 'Second titre';
      this.cdr.markForCheck(); // Force la détection des changements
    }, 2000);
  }
}
