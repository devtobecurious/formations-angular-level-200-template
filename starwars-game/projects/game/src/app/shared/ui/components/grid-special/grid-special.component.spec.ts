import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSpecialComponent } from './grid-special.component';

describe('GridSpecialComponent', () => {
  let component: GridSpecialComponent;
  let fixture: ComponentFixture<GridSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
