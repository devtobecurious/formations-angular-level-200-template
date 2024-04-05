import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticsComponent } from './list-statistics.component';
import { StatisticsInfrastructure } from '../../services/statistics.infrastructure';
import { Observable, of } from 'rxjs';
import { Statistics } from '../../models/statistics';

const mockInfra = {
  getAll(): Observable<Statistics> {
    const table: Statistics = [{ year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }]
    return of(table)
  }
}

fdescribe('ListStatisticsComponent', () => {
  let component: ListStatisticsComponent;
  let fixture: ComponentFixture<ListStatisticsComponent>;

  beforeEach(async () => { // prépare un module de testing, comme si c'était un module angular
    await TestBed.configureTestingModule({
      imports: [ListStatisticsComponent],
      providers: [
        //{ provide: StatisticsInfrastructure, useValue: mockInfra }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticsComponent);
    component = fixture.componentInstance;// permet de créer une instance de notre composant
    // fixture.detectChanges();
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // vérifie si instance pas null
  });

  it('should display a table with 3 rows', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    const domGenereDeMonComposant = fixture.nativeElement;
    const table = domGenereDeMonComposant.querySelector('table');

    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(3);
  });
});
