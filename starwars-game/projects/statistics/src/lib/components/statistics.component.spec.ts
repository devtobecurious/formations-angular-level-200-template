import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;

    // fixture.autoDetectChanges(true)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get table with two rows', () => {
    // Arrange

    // component.list.set(result);

    fixture.detectChanges();
    // Act
    const table = fixture.nativeElement.querySelector('table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
