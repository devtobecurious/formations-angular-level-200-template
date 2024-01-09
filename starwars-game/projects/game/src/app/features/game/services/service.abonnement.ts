import { inject } from "@angular/core";
import { GameApplication } from "./game.application";

export class ServiceAbonnement {
  private readonly application = inject(GameApplication);

  init(): void {
    this.application.getAll().subscribe();
  }
}

