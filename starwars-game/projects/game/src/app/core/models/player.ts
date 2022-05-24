export interface PlayerDto {
  id: number;
  name: string;
  score: number;
}

const playerDto: PlayerDto = {
  id: 1,
  name: 'Luke Skywalker',
  score: 0
}

playerDto.id = 2;
playerDto.name = 'Darth Vader';
playerDto.score = 0;


export class Player {
  id : number = 0;
  name !: string;
  score !: number;

  // move(position: {x:number, y: number}) {

  // }
}

// const playerDto2 = new PlayerDto();



const player: Player = {
  id: 1,
  name: 'Luke Skywalker',
  score: 0,

  // move(position: {x:number, y: number}) {}
}

const player2 = new Player();

const player3 = {
  id: 1,
  name: 'Luke Skywalker',
  score: 0
}


type PlayerType = {
  id: number;
  name: string;
  score: number;
  // avatar: string;
}

function move(player: PlayerType) {
}

move(player);
move(player2);
move(player3);



type PlayerType2 = Player | null | undefined;

type PlayerNight = Player & {
  light: number
}

const playerEssai: PlayerType2 = {
  id: 1,
  name: 'Luke Skywalker',
  score: 0
}

const darthVador: PlayerNight = {
  id: 1,
  name: 'Anakin Skywalker',
  score: 0,
  light: 0
}


function save(player: PlayerType2) {
  if (player) {
    player.score = 0;
  }
}

save(null);

// save(undefined);
// save({});
