import { Component, computed, effect, inject, signal } from '@angular/core';
import { GetCurrentWeatherBusiness } from '../../services/get-current-weather-business';
import { GetCurrentWeather } from '../../services/get-current-weather';

@Component({
  selector: 'app-display-current-weather',
  imports: [],
  templateUrl: './display-current-weather.html',
  styleUrl: './display-current-weather.css',
  providers: [
    GetCurrentWeather
  ]
})
export class DisplayCurrentWeather {
 // protected readonly valueWithUrl = signal<{temp: number | undefined, imgUrl: string} | undefined>(undefined);
  protected readonly resource = (inject(GetCurrentWeather)).getAsResource();

  // private listenValueResourceEffect = effect(() => {
  //   const item = {
  //     temp: this.resource.value()?.current_weather.temperature,
  //     imgUrl: `http://openweathermap.org/img/wn/0${this.resource.value()?.current_weather.weathercode}d@2x.png`
  //   };
  //   this.valueWithUrl.set(item);
  // })

  protected readonly valueWithUrl = computed(() => ({
    temp: this.resource.value()?.temperature,
    imgUrl: `http://openweathermap.org/img/wn/0${this.resource.value()?.code}d@2x.png`
  }));

 
}
