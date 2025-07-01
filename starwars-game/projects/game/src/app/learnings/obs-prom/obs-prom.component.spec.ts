import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPromComponent } from './obs-prom.component';

describe('ObsPromComponent', () => {
  let component: ObsPromComponent;
  let fixture: ComponentFixture<ObsPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsPromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
