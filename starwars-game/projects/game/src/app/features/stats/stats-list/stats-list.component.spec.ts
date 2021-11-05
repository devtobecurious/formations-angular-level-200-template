import { Stat } from './../services/statistics.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsListComponent } from './stats-list.component';

fdescribe('StatsListComponent', () => {
  let component: StatsListComponent;
  let fixture: ComponentFixture<StatsListComponent>;
  let mock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsListComponent ],
      imports: [HttpClientTestingModule],
      providers: []

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListComponent);
    component = fixture.componentInstance;
    mock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list 2 stats items', () => {
    fixture.detectChanges();

    const request = mock.expectOne('une_url');

    const stats: Stat[] = [{}, {}];
    request.flush(stats);

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table.stats');

    expect(table).toBeTruthy();

    expect(table.rows.length).toEqual(2);
  });
});
