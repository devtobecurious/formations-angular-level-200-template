import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPlanet } from './add-planet';

describe('AddPlanet', () => {
  let component: AddPlanet;
  let fixture: ComponentFixture<AddPlanet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlanet],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlanet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
