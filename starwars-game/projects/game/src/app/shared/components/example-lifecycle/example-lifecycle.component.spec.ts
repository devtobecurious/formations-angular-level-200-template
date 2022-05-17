import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLifecycleComponent } from './example-lifecycle.component';

describe('ExampleLifecycleComponent', () => {
  let component: ExampleLifecycleComponent;
  let fixture: ComponentFixture<ExampleLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
