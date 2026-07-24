import { Component, computed, inject } from '@angular/core';
import { GetCurrentWeather } from '../../services/get-current-weather';
import { DisplayWeatherStats } from '../display-weather-stats/display-weather-stats';

@Component({
  selector: 'app-display-current-weather',
  imports: [DisplayWeatherStats],
  templateUrl: './display-current-weather.html',
  styleUrl: './display-current-weather.css',
  providers: [
    GetCurrentWeather
  ]
})
export class DisplayCurrentWeather {
  protected readonly resource = (inject(GetCurrentWeather)).getAsResource();

  protected readonly valueWithUrl = computed(() => {
    const value = this.resource.value();
    if (!value) {
      return undefined;
    }

    return {
      temp: value.temperature,
      code: value.code,
      imgUrl: `http://openweathermap.org/img/wn/0${value.code}d@2x.png`
    };
  });

  protected readonly telemetry = computed(() => {
    const weather = this.valueWithUrl();
    if (!weather) {
      return undefined;
    }

    const shieldLevel = Math.round(Math.max(0, Math.min(100, 100 - Math.abs(weather.temp - 21) * 4)));
    const engineLoad = Math.round(Math.max(35, Math.min(100, 96 - Math.abs(weather.code - 3) * 7)));
    const atmosphere = weather.code >= 60 ? 'Tempete' : weather.code >= 45 ? 'Turbulences' : 'Stable';

    return {
      shieldLevel,
      engineLoad,
      atmosphere
    };
  });
}
