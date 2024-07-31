import { inject, Injectable } from "@angular/core";
import { GameBusiness } from "../../../features/game/services/game.business";

@Injectable()
export class AppInitService {
  private readonly gameBusiness = inject(GameBusiness);

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.gameBusiness.init();
    });
  }
}
