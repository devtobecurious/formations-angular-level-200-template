export type PersonApiResult = {
  name: string,
  birth_year: number
}

export type ApiResult = {
  results: PersonApiResult[]
}
