import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatsComponent } from './table-stats.component';

describe('TableStatsComponent', () => {
  let component: TableStatsComponent;
  let fixture: ComponentFixture<TableStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
