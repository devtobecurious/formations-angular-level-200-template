import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatisticsComponent } from './page-statistics.component';

describe('PageStatisticsComponent', () => {
  let component: PageStatisticsComponent;
  let fixture: ComponentFixture<PageStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
