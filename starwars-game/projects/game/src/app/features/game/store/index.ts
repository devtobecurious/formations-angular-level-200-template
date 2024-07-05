import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addItemsFromApiAction, addNewGameAction, errorWhenGetDataFromApiAction } from "./games.actions";

//#region Pour rappel / apprentissage ts
// function display(item: any): void {
//   console.info(item.toUpperCase());
// }
// display('hello');
// display(123); // ça plante

// function display2(item: unknown): void {
//   if(typeof(item) === 'string') { // narrowing
//     console.info(item.toUpperCase());
//   }
// }
// display2('hello');
// display2(1);
//#endregion

export interface ItemsState<T> {
  items: T[],
  isLoading?: boolean,
  error?: unknown
}

// 1. Création de l'état
export interface GamesState extends ItemsState<GameDto> {
}

// 2. Initial value
const initialValue: GamesState = {
  items: []
}

// 3. Création reducer
export const gamesReducer = createReducer(
  initialValue,

  on(errorWhenGetDataFromApiAction, (state, action) => {
    const newState: GamesState = {
      items: [... state.items],
      error: action.error
    };

    return newState;
  }),

  on(addItemsFromApiAction, (state, action) => {
    const newState: GamesState = {
      items: action.items,
      isLoading: false
    }

    return newState;
  }),

  on(addNewGameAction, (state, action) => {
    // le but de chaque on, c'est de renvoyer une nouvelle version de l'état (donc une nouvelle référence)

    const newState: GamesState = {
      items: [ ... state.items, action.item ]
    }

    return newState; // il y a un next de mon "behavior subject" donc un emit
  })
)
