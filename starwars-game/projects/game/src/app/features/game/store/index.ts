import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../../../core/models/game.dto";
import { addNewGameAction, addNewGameFromUIAction, setGamesListAction } from "./games.actions";

//#region Dans un autre fichier
export interface State<T> {
    items: T[],
    isLoading: boolean,
    error ?: unknown
}
//#endregion

export interface GamesState extends State<GameDto> {
}

export const initialState: GamesState = {
    items: [],
    isLoading: false
}

export const gamesReducer = createReducer(
    initialState,

    on(setGamesListAction, (state, action) => {
        return {
            ...state,
            items: action.items
        }
    }),

    on(addNewGameFromUIAction, (state, action) => {
        const gameFictif: GameDto = {
            ...action.item,
            id: 2
        }

        const newState: GamesState = {
            ...state,
            items: [...state.items, gameFictif]
        }

        return newState
    })

    on(addNewGameAction, (state) => { // but : générer une nouvelle "version" (référence) de l'état
        const gameFictif: GameDto = {
            id: 1,
            success: true,
            title: 'Last of us'
        }

        const newState: GamesState = {
            ...state,
            items: [...state.items, gameFictif]
        }

        return newState
    })
)
