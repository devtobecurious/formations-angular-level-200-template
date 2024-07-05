import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatisticsComponent } from './list-statistics.component';

describe('ListStatisticsComponent', () => {
  let component: ListStatisticsComponent;
  let fixture: ComponentFixture<ListStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
