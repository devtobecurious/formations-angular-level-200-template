import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatsComponent } from './list-stats.component';


fdescribe('ListStatsComponent', () => {
  let component: ListStatsComponent;
  let fixture: ComponentFixture<ListStatsComponent>;

  beforeAll(() => {
    console.log('Avant tous les ITs');
  });

  beforeEach(async () => {
    console.log('Avant chaque IT');
    await TestBed.configureTestingModule({
      declarations: [ ListStatsComponent ],
      imports: [],
      providers: []
    })
    .compileComponents();

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
    component.items = [{}, {}];

    // Act
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table.table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
    // console.log(fixture.nativeElement);
  });
});
