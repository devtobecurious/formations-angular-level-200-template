import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAndPromiseComponent } from './obs-and-promise.component';

describe('ObsAndPromiseComponent', () => {
  let component: ObsAndPromiseComponent;
  let fixture: ComponentFixture<ObsAndPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObsAndPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsAndPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
