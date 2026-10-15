import { Component } from '@angular/core';
import { FormEditShip } from '../form-edit-ship/form-edit-ship';
import { Ship } from '../../models/ship';

@Component({
  imports: [FormEditShip],
  selector: 'app-edit-ship',
  styleUrl: './edit-ship.css',
  templateUrl: './edit-ship.html',
})
export class EditShip {
  myShip: Ship = { id: 1, name: 'Falcon X' }
}
