export interface Planet {
  name: string;
  diameter: number;
  climate: string;
}

export type Planets = Planet[] | undefined
