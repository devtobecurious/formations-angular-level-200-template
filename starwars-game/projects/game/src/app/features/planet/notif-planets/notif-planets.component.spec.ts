import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifPlanetsComponent } from './notif-planets.component';

describe('NotifPlanetsComponent', () => {
  let component: NotifPlanetsComponent;
  let fixture: ComponentFixture<NotifPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NotifPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
