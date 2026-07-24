import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherStats } from './display-weather-stats';
import { GetWeatherStats } from '../../services/get-weather-stats';

describe('DisplayWeatherStats', () => {
  let component: DisplayWeatherStats;
  let fixture: ComponentFixture<DisplayWeatherStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWeatherStats],
      providers: [GetWeatherStats]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayWeatherStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 weather stats', () => {
    // Arrange
    
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const table = compiled.querySelector('table');
    const rows = table?.rows;

    // Assert
    expect(compiled.querySelector('tr')).toBeTruthy();
    expect(rows?.length).toBe(3);
  });
});
