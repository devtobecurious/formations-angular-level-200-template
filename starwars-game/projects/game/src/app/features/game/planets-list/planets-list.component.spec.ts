import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListComponent } from './planets-list.component';

describe('PlanetsListComponent', () => {
  let component: PlanetsListComponent;
  let fixture: ComponentFixture<PlanetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
