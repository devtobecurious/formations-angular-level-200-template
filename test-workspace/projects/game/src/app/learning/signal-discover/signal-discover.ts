import { Component, computed, signal } from '@angular/core';
import { Employee } from './models';

@Component({
  selector: 'app-signal-discover',
  imports: [],
  templateUrl: './signal-discover.html',
  styleUrl: './signal-discover.css'
})
export class SignalDiscover {
  employee = signal<Employee | undefined>(undefined)
  firstName = computed(() => `${this.employee()?.firstName.length} ${this.employee()?.firstName}`)

  ngOnInit(): void {

  }

  getOne(): void {
    this.employee.set({ id: 1, firstName: 'John', lastName: 'Doe' })
  }

  compute(): string | undefined {
    return this?.employee()?.lastName.charAt(0)
  }

  get employeeValue(): string | undefined {
    return this.employee()?.firstName
  }
}
