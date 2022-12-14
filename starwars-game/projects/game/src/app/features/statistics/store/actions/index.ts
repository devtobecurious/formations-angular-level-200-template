// Liste des demandes / des ordres / des commandes à envoyer au reducer

import { createAction, props } from "@ngrx/store";

export type propAction = { nbItems: number };
export const prechargementStatsDeTestsAction = createAction('[UI] - Preload nb stats', props<propAction>());
