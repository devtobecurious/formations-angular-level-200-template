import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnemiesComponent } from './list-enemies.component';

fdescribe('ListEnemiesComponent', () => {
  let component: ListEnemiesComponent;
  let fixture: ComponentFixture<ListEnemiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnemiesComponent ],
      imports: [],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnemiesComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of 2 enemies', () => {
    fixture.detectChanges();

    const domHtml = fixture.nativeElement;

    const table = domHtml.querySelector('table.enemies');
    expect(table).toBeTruthy();

    expect(table.rows.length).toBe(2);
  });
});
