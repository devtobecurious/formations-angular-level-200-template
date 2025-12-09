export interface Search {
  query: string;
}

export const createSearch = (): Search => ({
  query: '',
});
