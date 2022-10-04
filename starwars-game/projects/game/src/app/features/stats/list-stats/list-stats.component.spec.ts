import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { StatsBusinessService } from '../service/stats-business.service';

import { ListStatsComponent } from './list-stats.component';

const fakeService = {
  getAll(): Observable<any[]> {
    return of([{}, {}]);
  }
}

fdescribe('ListStatsComponent', () => {
  let component: ListStatsComponent;
  let fixture: ComponentFixture<ListStatsComponent>;
  let mock: HttpTestingController;

  beforeAll(() => {
    console.info('Démarrage des tests pour ListStats');
    // bien vider le localstorage ici !
  });

  beforeEach(async () => {
    // bien vider le localstorage ici !

    await TestBed.configureTestingModule({
      declarations: [ ListStatsComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [

        // { provide: StatsBusinessService,
        //   useValue: fakeService }

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatsComponent);
    component = fixture.componentInstance;
    mock = TestBed.inject(HttpTestingController);
    // fixture.detectChanges();

    // fixture.autoDetectChanges(true);
  });

  afterEach(() => {

  });

  afterAll(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 rows of stats', () => {
    // Arrange
    // component.items = [{}, {}];

    // Act
    fixture.detectChanges();


    const fakeRequest = mock.expectOne('urlAAppeler');
    expect(fakeRequest.request.method).toBe('GET');
    fakeRequest.flush([{}, {}]);

    fixture.detectChanges();


    console.info(fixture.nativeElement);
    const table = fixture.nativeElement.querySelector('table.table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
