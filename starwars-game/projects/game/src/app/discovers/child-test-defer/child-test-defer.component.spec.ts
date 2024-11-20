import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestDeferComponent } from './child-test-defer.component';

describe('ChildTestDeferComponent', () => {
  let component: ChildTestDeferComponent;
  let fixture: ComponentFixture<ChildTestDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTestDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTestDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
