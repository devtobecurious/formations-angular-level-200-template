import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindObsComponent } from './remind-obs.component';

describe('RemindObsComponent', () => {
  let component: RemindObsComponent;
  let fixture: ComponentFixture<RemindObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RemindObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemindObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
