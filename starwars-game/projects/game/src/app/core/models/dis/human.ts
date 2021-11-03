import { Car } from "./car";

export class Human {

  constructor(private car: Car) {
  }
}

const human = new Human(new Car());
