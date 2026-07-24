import { inject, Service } from '@angular/core';
import { Observable, map, switchMap, timer } from 'rxjs';
import type { Weather, WeatherResponse } from '../models/weather';
import { HttpClient } from '@angular/common/http';

@Service({autoProvided: false})
export class GetCurrentWeather {
    private readonly http = inject(HttpClient);  
    private readonly weather$ = this.http.get<WeatherResponse>('https://api.open-meteo.com/v1/forecast?latitude=47.218&longitude=-1.5528&current_weather=true')
            .pipe(
                map(response => ({
                    temperature: response.current_weather.temperature,
                    code: response.current_weather.weathercode,
                }))
            );

    private readonly weatherByTime$ = timer(0, 1000).pipe(
        switchMap(() => this.weather$)                   
    );

    getOne(): Observable<Weather> {
        return this.weatherByTime$; 
    }
}
