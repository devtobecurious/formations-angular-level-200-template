import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideOneComponent } from './dark-side-one.component';

describe('DarkSideOneComponent', () => {
  let component: DarkSideOneComponent;
  let fixture: ComponentFixture<DarkSideOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSideOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
