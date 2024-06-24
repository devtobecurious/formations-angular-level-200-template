import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibAvecServiceComponent } from './test-lib-avec-service.component';

describe('TestLibAvecServiceComponent', () => {
  let component: TestLibAvecServiceComponent;
  let fixture: ComponentFixture<TestLibAvecServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLibAvecServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLibAvecServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
