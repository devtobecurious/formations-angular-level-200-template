import { inject, Injectable } from '@angular/core';
import { GetAllGameInfrastructure } from './game.service';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

@Injectable({
  providedIn: 'root'
})
export class GameBusiness {
  private readonly infra = inject(GetAllGameInfrastructure);

  getAll(): Observable<GameDto[]> {
    return this.infra.getAll('');
  }
}
