import { Search } from "../models/search";

export interface SearchState  {
  item: Search
  isLoading ?: boolean
  error ?: unknown
}

export const initialValue: SearchState = {
  item: {
    value: ''
  }
}
