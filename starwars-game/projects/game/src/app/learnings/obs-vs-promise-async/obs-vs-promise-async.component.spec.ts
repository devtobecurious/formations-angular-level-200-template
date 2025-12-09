import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsVsPromiseAsyncComponent } from './obs-vs-promise-async.component';

describe('ObsVsPromiseAsyncComponent', () => {
  let component: ObsVsPromiseAsyncComponent;
  let fixture: ComponentFixture<ObsVsPromiseAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsVsPromiseAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsVsPromiseAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
