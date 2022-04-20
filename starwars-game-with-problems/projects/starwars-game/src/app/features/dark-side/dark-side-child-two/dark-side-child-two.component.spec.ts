import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideChildTwoComponent } from './dark-side-child-two.component';

describe('DarkSideChildTwoComponent', () => {
  let component: DarkSideChildTwoComponent;
  let fixture: ComponentFixture<DarkSideChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSideChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
