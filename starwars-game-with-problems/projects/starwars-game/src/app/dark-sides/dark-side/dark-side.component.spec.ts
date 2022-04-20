import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideComponent } from './dark-side.component';

describe('DarkSideComponent', () => {
  let component: DarkSideComponent;
  let fixture: ComponentFixture<DarkSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
