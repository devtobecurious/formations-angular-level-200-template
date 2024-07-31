import { GameBusiness } from "../../features/game/services/game.business";
import { AppInitService } from "./services/app-init.service";

export function initializeApp(appInitService: AppInitService, business: GameBusiness) {
  return (): Promise<any> => {
    return appInitService.init();
  }
}
