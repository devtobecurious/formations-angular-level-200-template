interface PlayerInterface {
  name: string;
  id: number;
}

class Player implements PlayerInterface {
    constructor(public name: string, public id: number) {
    }
}

const player: Player = new Player('Luke Skywalker', 1);

let player3 = {
  name: 'Luke Skywalker',
  id: 1
};

let player2: PlayerInterface = {
  name: 'Luke Skywalker',
  id: 1
};

player2 = player;

