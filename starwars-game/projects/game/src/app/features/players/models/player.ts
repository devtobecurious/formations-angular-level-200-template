import { GameDto } from "../../../core/models/game.dto"

export interface Player {
  id: number
  firstName: string
  games ?: GameDto[]
}

export type PlayerList = Player[];
