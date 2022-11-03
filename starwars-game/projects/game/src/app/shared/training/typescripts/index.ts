interface User2 {
  name: string
}

class User implements User2 {
  name !: string;
}

type User3 = {
  name: string
}

function displayUser(user: { name: string }): void {
  console.info(user)
}

type MasterUser = {
  force: 'Light' | 'Dark'
} & User3;

const userF: MasterUser = {
  name: 'Ashoka',
  force: 'Light'
}

const user3: User3 = {
  name: 'Anakin'
}
displayUser(user3);

const user4 = {
  name: 'Yoda'
}
displayUser(user4);

const user: User2 = {
  name: 'Luke'
};
displayUser(user);

const userL: User = {
  name: 'Leia'
}





