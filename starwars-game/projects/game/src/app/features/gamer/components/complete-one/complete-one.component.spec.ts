import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOneComponent } from './complete-one.component';

describe('CompleteOneComponent', () => {
  let component: CompleteOneComponent;
  let fixture: ComponentFixture<CompleteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
