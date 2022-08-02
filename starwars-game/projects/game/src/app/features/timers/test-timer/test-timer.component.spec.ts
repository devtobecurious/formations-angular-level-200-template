import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTimerComponent } from './test-timer.component';

describe('TestTimerComponent', () => {
  let component: TestTimerComponent;
  let fixture: ComponentFixture<TestTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
