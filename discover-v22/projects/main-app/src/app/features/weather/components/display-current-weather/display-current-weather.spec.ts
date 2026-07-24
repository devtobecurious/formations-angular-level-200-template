import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrentWeather } from './display-current-weather';

describe('DisplayCurrentWeather', () => {
  let component: DisplayCurrentWeather;
  let fixture: ComponentFixture<DisplayCurrentWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCurrentWeather],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayCurrentWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
