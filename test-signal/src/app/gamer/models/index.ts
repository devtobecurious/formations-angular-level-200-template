export interface VideoGame {
  title: string;
  releaseDate ?: Date;
  isPlayed ?: boolean;
}

export interface GamerDto {
  name: string;
  age: number;
  videoGames: VideoGame[];
}



export const initialValue: GamerDto = {
  name: 'John Doe',
  age: 25,
  videoGames: [
    {
      title: 'The Witcher 3',
      releaseDate: new Date('2015-05-19'),
      isPlayed: true
    }
  ]
}
