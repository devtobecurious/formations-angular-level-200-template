export interface Character {
  name: string
  height: number,
  url: string
}

export type CharacterWIthId = Character & { id: number };

export type CharacterWithoutUrl = Omit<CharacterWIthId, 'url'>;


export type ItemsApiResult<T extends {}> = {
  results: T[]
}

export type PeopleAPiResult = ItemsApiResult<Character>
