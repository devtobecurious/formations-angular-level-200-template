/**
 * Un commentaire bien précis
 */
export interface User {
  surname: string;
  arme: string | undefined;
  imageUrl : string | undefined;
}

// export class User {
//   surname: string;
//   arme: string | undefined;
//   imageUrl !: string;
//   createdAt: Date;
//   updatedAt: Date = new Date();

//   constructor(surname: string) {
//     this.surname = surname;
//     this.createdAt = new Date();

//     if(this.arme) {
//       this.arme.toLowerCase();
//     }
//     this.arme?.toLowerCase();
//   }
// }

// export interface UserI {
//   surname: string;
// }

// const user1 = new User('Doe');
// const user2: UserI = {
//   surname: 'Doe'
// };

// const user4: User = {
//   surname: 'Doe3',
//   arme: 'Laser',
//   imageUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
//   createdAt: new Date(),
//   updatedAt: new Date()
// };


// function toLower(user: User) {
//   return user.surname.toLowerCase();
// }
// function toLowerI(user: UserI) {
//   return user.surname.toLowerCase();
// }
// toLower(user1);
// // toLower(user2);

// toLowerI(user1);
// toLowerI(user2);

// toLowerI( { surname: 'Doe3' } );

// const user3 = { surname: 'Doe3' };
// toLowerI( user3 );

// type UnTypeUser = {
//   surname: string;
// }
// function toLowerT(user: UnTypeUser) {
//   return user.surname.toLowerCase();
// }
// toLowerT(user1);
// toLowerT(user2);
// toLowerT(user3);
// toLowerT(user4);

// type Player = {
//   score: number;
// } & UnTypeUser;

// const player: Player = {
//   score: 10,
//   surname: 'Doe3'
// }

// export class User2 {
//   constructor(protected surname: string) {
//   }
// }

// const user: User2 = new User2('Doe');

