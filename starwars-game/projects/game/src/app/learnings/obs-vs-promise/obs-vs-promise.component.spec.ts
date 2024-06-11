import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsVsPromiseComponent } from './obs-vs-promise.component';

describe('ObsVsPromiseComponent', () => {
  let component: ObsVsPromiseComponent;
  let fixture: ComponentFixture<ObsVsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsVsPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsVsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
