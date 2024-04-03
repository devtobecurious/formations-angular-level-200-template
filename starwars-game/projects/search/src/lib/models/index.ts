// export class BaseSearchItem<T> {
//   value! : T;
// }

// export class SearchItem extends BaseSearchItem<string> {
//   value = '';
// }

export interface BaseSearchItem<T> {
  value: T
}

export interface SearchItem extends BaseSearchItem<string> {}
