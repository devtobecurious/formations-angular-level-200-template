import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllStarshipsPage } from './all-starships.page';

describe('AllStarshipsPage', () => {
  let component: AllStarshipsPage;
  let fixture: ComponentFixture<AllStarshipsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStarshipsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AllStarshipsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
