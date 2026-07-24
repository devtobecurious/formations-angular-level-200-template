import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherStat } from '../models/weather-stat';

@Service({ autoProvided: false})
export class GetWeatherStats {
    getAll(): Observable<WeatherStat[]> {
        return of([
            { year: 2022, month: 1, averageTemp: 5 },
            { year: 2022, month: 2, averageTemp: 7 },
            { year: 2022, month: 3, averageTemp: 10 },
        ]);
    }
}
