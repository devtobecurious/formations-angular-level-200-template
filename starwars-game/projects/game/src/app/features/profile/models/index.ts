export interface UserDto {
  name: string;
}

export type StringOrNumber = string | number;

export class User implements UserDto {
  // name: string = '';
  surname : string | undefined;
  lifePoints !: number;
  pouet ?: string;
  toto !: StringOrNumber;

  // constructor(name: string) {
  //   this.name = name;

  //   if (typeof(this.toto) == 'number') {
  //     const number: number = this.toto;
  //   }
  // }

  constructor(public name: string) {}
}


const gen = {
  name: 'Luke',
  surname: 'Skywalker',
  lifePoints: 100
};

// const user: User = gen;
const newUser = new User('luke');

type UserType = {name: string};
export type DarkType = { force: number } & UserType;

export type DarkChoice = string | DarkType;

export const darkVador: DarkType = {
  force: 1,
  name: 'Anakin'
}

function DisplayUser(user: UserType) {
  console.info(user);
}



// DisplayUser(user);

const userI: UserDto = {
  name: 'Leia'
};


DisplayUser(userI);
