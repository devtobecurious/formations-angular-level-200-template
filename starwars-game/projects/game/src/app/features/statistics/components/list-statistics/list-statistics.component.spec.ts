import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticsComponent } from './list-statistics.component';
import { StatisticsInfrastructure } from '../../services/statistics.infrastructure';
import { Observable, of } from 'rxjs';
import { Statistics } from '../../models';

const mockService = {
  getAll(): Observable<Statistics> {
    const table: Statistics = [
      { annee: 2023, mois: 1, nbGagnees: 2, nbPerdues: 8 },
      { annee: 2024, mois: 5, nbGagnees: 8, nbPerdues: 2 }
    ];

    return of(table);
  }
}

fdescribe('ListStatisticsComponent', () => {
  let component: ListStatisticsComponent;
  let fixture: ComponentFixture<ListStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: StatisticsInfrastructure, useValue: mockService }
      ],
      imports: [ListStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    // fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a table with 2 rows', () => {
    // Arrange : je prépare les données input pour le test
    // component.items = ['', '', '']

    // Act : je lance ce que je veux tester
    fixture.detectChanges();

    // Assert : je test / je prouve
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const rows = table.rows;
    expect(rows.length).toBe(2);
  });
});
