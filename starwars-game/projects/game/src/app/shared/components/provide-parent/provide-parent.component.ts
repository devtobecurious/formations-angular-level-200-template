import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services/settings.service';
import { EnfantComponent } from './enfant/enfant.component';

@Component({
  selector: 'game-provide-parent',
  standalone: true,
  imports: [CommonModule, EnfantComponent],
  templateUrl: './provide-parent.component.html',
  styleUrl: './provide-parent.component.css',
  providers: [SettingsService] // A chaque fois que je vais instancier un parent composant, ça permet d'indiquer d'instancier un service
})
export class ProvideParentComponent {
  private readonly settings = inject(SettingsService);
}
