import { BigCity } from "./big-city";

export interface Coordinate {
  x: number;
  y: number;
  z: number;
}

export interface Planet {
  name: string;
  diameter: number;
  climate: string;
  cities: BigCity[];
  coordinate: Coordinate;
}

export type Planets = Planet[] | undefined
