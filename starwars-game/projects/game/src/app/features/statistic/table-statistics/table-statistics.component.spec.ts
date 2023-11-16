import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatisticsComponent } from './table-statistics.component';

describe('TableStatisticsComponent', () => {
  let component: TableStatisticsComponent;
  let fixture: ComponentFixture<TableStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
