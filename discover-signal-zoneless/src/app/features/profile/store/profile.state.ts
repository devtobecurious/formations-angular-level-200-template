import { Profile } from "../models/profile";

export interface ProfileState {
  item: Profile | undefined,
  isLoading?: boolean,
  error?: string
}

export const initialProfileState: ProfileState = {
  item: undefined,
  isLoading: false,
  error: undefined
}
