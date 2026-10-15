import { Component, computed, effect, input, linkedSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Ship } from '../../models/ship';
import { form } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-form-edit-ship',
  styleUrl: './form-edit-ship.css',
  templateUrl: './form-edit-ship.html',
})
export class FormEditShip implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.info(changes)
  }


  shipToBeUpdated = input.required<Ship>();
  title = input('Edit')

  //private readonly tempShip = computed(() => signal(this.shipToBeUpdated()));  //signal<Ship | undefined>(undefined); // linkedSignal(this.shipToBeUpdated);
  private readonly tempShip = linkedSignal(this.shipToBeUpdated);
  protected readonly editForm = form(this.tempShip);

  // private readonly tempEffect = effect(() => {
  //   const ship = this.shipToBeUpdated();
  //   this.tempShip.set(ship);
  // })

  ngOnInit(): void {
    this.tempShip.set({id: 1, name: 'XWing'})
  }
}
