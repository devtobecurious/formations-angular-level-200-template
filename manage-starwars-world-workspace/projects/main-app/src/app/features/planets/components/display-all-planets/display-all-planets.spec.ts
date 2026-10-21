import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayAllPlanets } from './display-all-planets';

describe('DisplayAllPlanets', () => {
  let component: DisplayAllPlanets;
  let fixture: ComponentFixture<DisplayAllPlanets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllPlanets],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayAllPlanets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
