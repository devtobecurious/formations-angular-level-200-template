import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { StatApplicationService } from '../application/stat-application.service';

import { StatListComponent } from './stat-list.component';

// v1 avec fake du service
// const fakeStatsService: StatApplicationService = {
//   getAll(): Observable<string[]> {
//     return of(['stat1', 'stat2']);
//   }
// }

fdescribe('StatListComponent', () => {
  let component: StatListComponent;
  let fixtureAccesDom: ComponentFixture<StatListComponent>;
  let service: StatApplicationService;

  beforeAll(async () => {
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatListComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
       // { provide: StatApplicationService, useValue: fakeStatsService}
       StatApplicationService
      ]
    })
    .compileComponents();

    fixtureAccesDom = TestBed.createComponent(StatListComponent);
    component = fixtureAccesDom.componentInstance;
    service = TestBed.inject(StatApplicationService);
    // fixtureAccesDom.autoDetectChanges(true);
    // fixture.detectChanges();
  });

  it('should create (module config is ok)', () => {
    expect(component).toBeTruthy();
  });

  it('should get 2 rows of stats', () => {
    // Arrange
    // component.items = ['stat1', 'stat2'];

    // Act
    fixtureAccesDom.detectChanges();

    const table = fixtureAccesDom.nativeElement.querySelector('table');
    // expect(table).not.toBeNull();

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
