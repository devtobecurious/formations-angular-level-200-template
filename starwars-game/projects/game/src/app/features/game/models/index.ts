import { Observable } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

export type Games = GameDto[];
export type GamesAsObs = Observable<Games>;
