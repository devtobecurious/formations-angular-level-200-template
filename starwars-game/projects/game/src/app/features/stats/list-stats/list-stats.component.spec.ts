import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { StatisticMetierService } from '../services/statistic-metier.service';

import { ListStatsComponent } from './list-stats.component';

// const fakeService: StatisticMetierService = {
//   getAll(): Observable<any[]> {
//     return of([{}, {}]);
//   }
// }

fdescribe('ListStatsComponent', () => {
  let component: ListStatsComponent;
  let fixture: ComponentFixture<ListStatsComponent>;
  let mock: HttpTestingController;

  beforeAll(() => {
    console.log('Avant tous les ITs');
  });

  beforeEach(async () => {
    console.log('Avant chaque IT');
    await TestBed.configureTestingModule({
      declarations: [ ListStatsComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StatisticMetierService} // , useValue: fakeService }
      ]
    })
    .compileComponents();

    mock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ListStatsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    // fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 2 rows of stats', () => {
    // Arrange
    // component.items = [{}, {}];
    // fixture.detectChanges();
    // console.info('00. Avant detect changes');
    fixture.detectChanges();
    // console.info('01. Avant detect changes');

    const testRequest = mock.expectOne('urlVersMonApiStats');
    // expect(testRequest.request.method).toBe('GET');

    const retourFakeAPi = [{}, {}];
    testRequest.flush(retourFakeAPi);

    // console.info('20. Avant detect changes');
     fixture.detectChanges();
    //console.info('21. Avant detect changes');
    // Act

    // fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table.table');


    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
    // console.log(fixture.nativeElement);
  });
});
