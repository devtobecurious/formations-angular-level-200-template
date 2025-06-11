import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindObsComponent } from './remind-obs.component';

describe('RemindObsComponent', () => {
  let component: RemindObsComponent;
  let fixture: ComponentFixture<RemindObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemindObsComponent]
    });
    fixture = TestBed.createComponent(RemindObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
