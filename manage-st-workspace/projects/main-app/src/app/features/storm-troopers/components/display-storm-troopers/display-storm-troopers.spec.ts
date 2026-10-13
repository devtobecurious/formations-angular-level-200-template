import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayStormTroopers } from './display-storm-troopers';

describe('DisplayStormTroopers', () => {
  let component: DisplayStormTroopers;
  let fixture: ComponentFixture<DisplayStormTroopers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayStormTroopers],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayStormTroopers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
