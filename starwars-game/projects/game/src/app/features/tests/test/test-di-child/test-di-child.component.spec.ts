import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiChildComponent } from './test-di-child.component';

describe('TestDiChildComponent', () => {
  let component: TestDiChildComponent;
  let fixture: ComponentFixture<TestDiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDiChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
