
export interface VideoGame {
  id: number;
  title: string;
  genre: string;
  pegi: '7' | '12' | '16' | '18';
  publishedDate: Date;
}

export type VideoGameSummary = {
  fakeId: string;
  title: string;
};

export interface Profile {
  id: number;
  name: string;
  favoriteGames: VideoGame[];
}

export type CreateProfile = Omit<Profile, 'id'>;
export type UpdateProfile = Partial<CreateProfile> & { id: number };
