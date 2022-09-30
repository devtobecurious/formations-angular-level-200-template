import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAndPromisesComponent } from './observables-and-promises.component';

describe('ObservablesAndPromisesComponent', () => {
  let component: ObservablesAndPromisesComponent;
  let fixture: ComponentFixture<ObservablesAndPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesAndPromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesAndPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
