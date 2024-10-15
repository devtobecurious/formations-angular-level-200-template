import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsVsPromComponent } from './obs-vs-prom.component';

describe('ObsVsPromComponent', () => {
  let component: ObsVsPromComponent;
  let fixture: ComponentFixture<ObsVsPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsVsPromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsVsPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
