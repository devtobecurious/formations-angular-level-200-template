import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutourObservablesComponent } from './autour-observables.component';

describe('AutourObservablesComponent', () => {
  let component: AutourObservablesComponent;
  let fixture: ComponentFixture<AutourObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AutourObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutourObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
