import { GameDto } from '../../../core/models/game.dto';
import { createReducer, on } from '@ngrx/store';
import { addNouvellePartieRequest, addPartieCreeParUserRequest } from './actions';

export interface GamesState {
  // ids: number[],
  items: GameDto[]
}

export const initialGamesState: GamesState = {
  items: []
};

export const gamesReducer = createReducer(
  initialGamesState,

  on(addPartieCreeParUserRequest, (state, action) => {
    const newGame = action.game;

    const items = [... state.items];
    // const cloneState = { ... state }; // il est readonly, on peut pas le cloner directement
    items.push(newGame);

    return {
      items: items
    };
  }),

  on(addNouvellePartieRequest, (state, action) => {
    const fakeGame: GameDto = {
      id: (Math.random() * 10),
      success: false,
      title: `bvllbgl ${(Math.random() * 100)}`
    };

    const items = [... state.items];
    // const cloneState = { ... state }; // il est readonly, on peut pas le cloner directement
    items.push(fakeGame);

    return {
      items: items
    };
  })
);
