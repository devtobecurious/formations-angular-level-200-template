import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerChildTestDeferComponent } from './eager-child-test-defer.component';

describe('EagerChildTestDeferComponent', () => {
  let component: EagerChildTestDeferComponent;
  let fixture: ComponentFixture<EagerChildTestDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EagerChildTestDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerChildTestDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
