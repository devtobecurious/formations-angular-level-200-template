import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { EnemyService } from '../services/enemy.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EnemyListComponent } from './enemy-list.component';

fdescribe('EnemyListComponent', () => {
  let component: EnemyListComponent;
  let fixture: ComponentFixture<EnemyListComponent>;

  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EnemyListComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EnemyService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(EnemyListComponent);
    component = fixture.componentInstance;
    //
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 2 enemies', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();


    fixture.detectChanges();
    const fakeRequest = httpMock.expectOne('api/lesenemies');

    expect(fakeRequest.request.method).toBe('GET');

    fakeRequest.flush(
      [
        {id: 0, libelle: '', life: 0, xp: 0},
        {id: 0, libelle: '', life: 0, xp: 0}
      ]
    );
    fixture.detectChanges();

    expect(table.rows.length).toBe(2);
  })
});
