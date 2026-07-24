import { TestBed } from '@angular/core/testing';
import { GetCurrentWeatherBusiness } from './get-current-weather-business';
import { GetCurrentWeather } from './get-current-weather';
import { of } from 'rxjs';


describe('GetCurrentWeatherBusiness', () => {
  let service: GetCurrentWeatherBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetCurrentWeatherBusiness,
        { provide: GetCurrentWeather, useValue: { getOne: () => of({ code: 200, temperature: 25 }) } }
      ],
    });
    service = TestBed.inject(GetCurrentWeatherBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of Weather with valid code and temperature', (done) => {

    //vitest.spyOn(service, 'getOne').mockReturnValue(of({ code: 200, temperature: 25 }));

    // Act: call the getOne method
    service.getOne().subscribe((weather) => {
      // Assert: check the emitted value
      expect(weather).toBeDefined();
      expect(weather.temperature).toBeDefined();
      expect(weather.code).toBeDefined();
    });
  });
});
