import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesObservablesComponent } from './mes-observables.component';

describe('MesObservablesComponent', () => {
  let component: MesObservablesComponent;
  let fixture: ComponentFixture<MesObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MesObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
