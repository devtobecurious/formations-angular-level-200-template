import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCustomComponent } from './grid-custom.component';

describe('GridCustomComponent', () => {
  let component: GridCustomComponent;
  let fixture: ComponentFixture<GridCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
