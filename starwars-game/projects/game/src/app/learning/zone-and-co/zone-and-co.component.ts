import { Component, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-zone-and-co',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zone-and-co.component.html',
  styleUrl: './zone-and-co.component.css'
})
export class ZoneAndCoComponent {
  private readonly zone = inject(NgZone);
  title = 'Dark vador !'

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.title = 'Anakin'; // une mise à jour longue

        // une regex

        this.zone.run(() => {
          //this.title = 'Leia';
        });
      }, 1500);
    })
  }
}
