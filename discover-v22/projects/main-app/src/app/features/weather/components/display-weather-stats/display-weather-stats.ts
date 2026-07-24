import { Component, inject, signal } from '@angular/core';
import { toSignal} from '@angular/core/rxjs-interop';
import { GetWeatherStats } from '../../services/get-weather-stats';

@Component({
  selector: 'app-display-weather-stats',
  imports: [],
  templateUrl: './display-weather-stats.html',
  styleUrl: './display-weather-stats.css',
  providers: [GetWeatherStats]
})
export class DisplayWeatherStats {
  private readonly service = inject(GetWeatherStats);
  protected readonly items = toSignal(this.service.getAll(), { initialValue: [] });

  ngOnInit(): void {

  }
}
