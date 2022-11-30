import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridParentComponent } from './grid-parent.component';

describe('GridParentComponent', () => {
  let component: GridParentComponent;
  let fixture: ComponentFixture<GridParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
