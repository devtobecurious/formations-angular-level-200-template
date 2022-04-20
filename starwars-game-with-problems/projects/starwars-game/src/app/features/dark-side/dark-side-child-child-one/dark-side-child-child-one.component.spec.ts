import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideChildChildOneComponent } from './dark-side-child-child-one.component';

describe('DarkSideChildChildOneComponent', () => {
  let component: DarkSideChildChildOneComponent;
  let fixture: ComponentFixture<DarkSideChildChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSideChildChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideChildChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
