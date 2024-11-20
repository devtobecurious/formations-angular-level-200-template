import { Component } from '@angular/core';
import { EagerChildTestDeferComponent } from "../eager-child-test-defer/eager-child-test-defer.component";
import { ChildTestDeferComponent } from "../child-test-defer/child-test-defer.component";

@Component({
  selector: 'game-test-defer',
  standalone: true,
  imports: [EagerChildTestDeferComponent, ChildTestDeferComponent],
  templateUrl: './test-defer.component.html',
  styleUrl: './test-defer.component.css'
})
export class TestDeferComponent {
  monBooleen = false
}
