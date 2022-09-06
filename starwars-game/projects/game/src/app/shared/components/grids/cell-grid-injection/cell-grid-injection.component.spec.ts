import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellGridInjectionComponent } from './cell-grid-injection.component';

describe('CellGridInjectionComponent', () => {
  let component: CellGridInjectionComponent;
  let fixture: ComponentFixture<CellGridInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellGridInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellGridInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
