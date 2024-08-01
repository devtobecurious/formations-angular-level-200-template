export interface Friend {
  name: string
  friends ?: Friends
}

export type Friends = Friend[]
