import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeferComponent } from './test-defer.component';

describe('TestDeferComponent', () => {
  let component: TestDeferComponent;
  let fixture: ComponentFixture<TestDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
