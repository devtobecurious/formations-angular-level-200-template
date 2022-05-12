import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { StatsService } from '../../services/stats.service';

import { StatItem, StatListComponent } from './stat-list.component';

const valueService = {
  getAll: () => {
    return of([{month: 1, nbGames: 0}]);
  }
}

class FakeService extends StatsService {
  getAll(): Observable<StatItem[]> {
    return of([{month: 1, nbGames: 0}]);
  }
}

fdescribe('StatListComponent', () => {
  let component: StatListComponent;
  let fixture: ComponentFixture<StatListComponent>;
  let mockHttp: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        StatsService
        //{ provide: StatsService, useValue: valueService },
        //{ provide: StatsService, useClass: FakeService }
      ]
    })
    .compileComponents();

    mockHttp = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatListComponent);
    component = fixture.componentInstance;

    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 rows of stats', () => {


    fixture.detectChanges();
    // component.items = [{month: 1, nbGames: 0}, {month: 2, nbGames: 12}];

    const httpRequest = mockHttp.expectOne('/api/stats');
    expect(httpRequest.request.method).toBe('GET');

    httpRequest.flush([{month: 1, nbGames: 0}, {month: 2, nbGames: 12}]);


    // Act
    fixture.detectChanges();

    // Assert
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const nbRows = table.rows.length;
    expect(nbRows).toBe(2);
  });
});
