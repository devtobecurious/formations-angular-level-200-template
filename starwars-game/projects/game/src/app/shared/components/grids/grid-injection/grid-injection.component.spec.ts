import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInjectionComponent } from './grid-injection.component';

describe('GridInjectionComponent', () => {
  let component: GridInjectionComponent;
  let fixture: ComponentFixture<GridInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
