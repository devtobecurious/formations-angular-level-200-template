import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSpecialComponent } from './row-special.component';

describe('RowSpecialComponent', () => {
  let component: RowSpecialComponent;
  let fixture: ComponentFixture<RowSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
