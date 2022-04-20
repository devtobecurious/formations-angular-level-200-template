import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideChildOneComponent } from './dark-side-child-one.component';

describe('DarkSideChildOneComponent', () => {
  let component: DarkSideChildOneComponent;
  let fixture: ComponentFixture<DarkSideChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSideChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
