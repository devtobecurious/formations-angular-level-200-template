import { inject, Service } from '@angular/core';
import { GetCurrentWeather } from './get-current-weather';
import { Weather } from '../models/weather';
import { filter, Observable } from 'rxjs';

@Service({autoProvided: false})
export class GetCurrentWeatherBusiness {
    private readonly getCurrentWeather = inject(GetCurrentWeather);

    getOne(): Observable<Weather> {
        return this.getCurrentWeather.getOne().pipe(
            filter((weather: Weather) => weather.code !== undefined && weather.temperature !== undefined)   
        );
    }
}
