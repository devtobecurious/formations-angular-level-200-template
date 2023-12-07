import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseVsObservablesComponent } from './promise-vs-observables.component';

describe('PromiseVsObservablesComponent', () => {
  let component: PromiseVsObservablesComponent;
  let fixture: ComponentFixture<PromiseVsObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PromiseVsObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseVsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
