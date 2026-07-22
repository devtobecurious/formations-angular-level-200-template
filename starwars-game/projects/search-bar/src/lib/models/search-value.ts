// export class SearchValue {
//   constructor(
//     public value: string,
//     public isSelected: boolean = false
//   ) { }
// }

// const searchValue1 = new SearchValue('example', true);

export interface SearchValue {
  value: string;
  //isSelected: boolean;
}

// export interface SearchValueWithId extends SearchValue {
//   id: string;
// }

// export type SearchValue = {
//   value: string;
//   isSelected: boolean;
// };

// export type SearchValueWithId = SearchValue & {
//   id: string;
// };

// const searchValue1: SearchValueWithId = {
//   value: 'example',
//   isSelected: true,
//   id: 'example-id'
// };