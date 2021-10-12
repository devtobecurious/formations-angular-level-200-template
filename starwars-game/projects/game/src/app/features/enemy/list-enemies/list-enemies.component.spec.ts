import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnemyService } from '../services/enemy.service';

import { ListEnemiesComponent } from './list-enemies.component';

fdescribe('ListEnemiesComponent', () => {
  let component: ListEnemiesComponent;
  let fixture: ComponentFixture<ListEnemiesComponent>;
  let service: EnemyService;
  let mock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnemiesComponent ],
      imports: [
        // HttpClientModule
        HttpClientTestingModule
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(EnemyService);
    mock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ListEnemiesComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    // fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of 2 enemies', () => {
    // Arrange
    // component.enemies = [
    //   '',
    //   ''
    // ];

    fixture.detectChanges();

    const stubRequest = mock.expectOne('uneurl');

    stubRequest.flush([
      { id: 1, name: '1235' },
      { id: 2, name: '1236' }
    ]);
    fixture.detectChanges();

    // Act

    // Assert
    const domHtml = fixture.nativeElement;

    const table = domHtml.querySelector('table.enemies');
    expect(table).toBeTruthy();

    expect(table.rows.length).toBe(2);
  });
});
