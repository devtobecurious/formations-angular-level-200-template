import { SearchItem } from "../models/search-item";

export interface SearchItemState {
  item: SearchItem;
  loading: boolean;
  error: string | null;
}

export const initialSearchItemState: SearchItemState = {
  item: { value: '' },
  loading: false,
  error: null
};
