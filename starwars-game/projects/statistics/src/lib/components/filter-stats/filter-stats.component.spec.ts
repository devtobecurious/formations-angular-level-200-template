import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatsComponent } from './filter-stats.component';

describe('FilterStatsComponent', () => {
  let component: FilterStatsComponent;
  let fixture: ComponentFixture<FilterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
