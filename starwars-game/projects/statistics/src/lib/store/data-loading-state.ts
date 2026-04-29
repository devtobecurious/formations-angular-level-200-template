export type Provider = 'ProvideAllStatistics' | 'ProvideStatsByYear';

export interface DataLoadingState {
  loading: boolean;
  error?: unknown;
  provider ?: Provider;
}

export const initialDataLoadingState: DataLoadingState = {
  loading: false
}
