import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCellComponent } from './in-cell.component';

describe('InCellComponent', () => {
  let component: InCellComponent;
  let fixture: ComponentFixture<InCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
