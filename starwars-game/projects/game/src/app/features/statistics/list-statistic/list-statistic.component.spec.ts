import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { StatsDatalayerService } from '../service/stats-datalayer.service';
import { IGetAllStats, Statistic, StatsService } from '../service/stats.service';

import { ListStatisticComponent } from './list-statistic.component';

const fakeService: IGetAllStats = {
  getAll(): Observable<Statistic[]> {
    return of([{}, {}]);
  }
};

fdescribe('ListStatisticComponent', () => {
  let component: ListStatisticComponent;
  let fixture: ComponentFixture<ListStatisticComponent>;
  let mock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatisticComponent ],
      providers: [
        // { provide: StatsService, useValue: fakeService }
        StatsService,
        // { provide: StatsDatalayerService, useValue: fakeService }
        StatsDatalayerService
      ],
      imports: [
       // HttpClientModule
       HttpClientTestingModule
      ]
    })
    .compileComponents();

    mock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ListStatisticComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    //fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 2 rows of statistics', () => {
    // Arrange
    // component.items = ['', ''];
    fixture.detectChanges(); // Je passe dans le ngoninit, donc j'appelle le subscribe
    const fakeRequest = mock.expectOne('monurl'); // ainsi la requête http est lancée
    expect(fakeRequest.request.method).toBe('GET');

    fakeRequest.flush([{}, {}]); // Cette ligne déclenche le callback dans le subscribe

    fixture.detectChanges(); // Enfin, active le ngfor
    // Act

    const dom = fixture.nativeElement;
    const table = dom.querySelector('table.table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
