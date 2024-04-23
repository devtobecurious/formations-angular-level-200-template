import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticsComponent } from './list-statistics.component';

fdescribe('ListStatisticsComponent', () => {
  let component: ListStatisticsComponent;
  let fixture: ComponentFixture<ListStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [ListStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    // fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a table with 2 rows', () => {
    // Arrange : je prépare les données input pour le test
    component.items = ['', '', '']

    // Act : je lance ce que je veux tester
    fixture.detectChanges();

    // Assert : je test / je prouve
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const rows = table.rows;
    expect(rows.length).toBe(component.items.length);
  });
});
