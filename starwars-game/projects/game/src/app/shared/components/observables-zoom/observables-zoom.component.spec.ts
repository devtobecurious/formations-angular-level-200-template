import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesZoomComponent } from './observables-zoom.component';

describe('ObservablesZoomComponent', () => {
  let component: ObservablesZoomComponent;
  let fixture: ComponentFixture<ObservablesZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
