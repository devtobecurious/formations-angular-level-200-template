import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Statistic } from '../models';
import { StatsService } from '../services/stats.service';

import { ListStatsComponent } from './list-stats.component';

const fakeService: StatsService = {
  getAll(): Observable<Statistic[]> {
    return of([
      { year: 2021, nbGames: 2 },
      { year: 2022, nbGames: 10 }
    ]);
  }
}

fdescribe('ListStatsComponent', () => {
  let component: ListStatsComponent;
  let fixture: ComponentFixture<ListStatsComponent>;

  beforeAll(() => {

  });

  beforeEach(async () => { // Avant chaque IT
    await TestBed.configureTestingModule({
      declarations: [ ListStatsComponent ],
      providers: [
         { provide: StatsService, useValue: fakeService }
          // { provide: StatsService, useClass: FakeService }
          // { provide: StatsService, useFactory: () => new StatsService() }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatsComponent);
    component = fixture.componentInstance;
    // fixture.autoDetectChanges(true);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 2 rows of statistics', () => {
    // Arrange
    // component.items = [
    //   { year: 2021, nbGames: 2 },
    //   { year: 2022, nbGames: 10 }
    // ];

    // Act
    fixture.detectChanges();

    // Assert
    const dom = fixture.nativeElement;
    const table = dom.querySelector('table.table');

    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
