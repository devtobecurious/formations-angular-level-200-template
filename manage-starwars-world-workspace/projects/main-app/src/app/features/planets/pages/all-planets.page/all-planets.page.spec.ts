import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPlanetsPage } from './all-planets.page';

describe('AllPlanetsPage', () => {
  let component: AllPlanetsPage;
  let fixture: ComponentFixture<AllPlanetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPlanetsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AllPlanetsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
