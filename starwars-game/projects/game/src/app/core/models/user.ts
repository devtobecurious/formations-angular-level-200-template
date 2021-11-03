export class User {
  public weaponType !: string;
  constructor(public surname: string, public pictureUrl: string = '') {
  }
}

const user = new User('');
user.pictureUrl = '';

const user2: User = {
 pictureUrl: '',
 surname: '',
 weaponType: ''
};

const user3 = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
 };

export declare type UserLike = {
  pictureUrl: string,
  surname: string,
  weaponType: string,
}
const user5: UserLike = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
 };



 export interface UserBis {
  pictureUrl: string;
  surname: string;
  weaponType: string;
 }

 const user4: UserBis = {
  pictureUrl: '',
  surname: '',
  weaponType: ''
 }



 function display(user: User) {
   console.info(user);
 }

 display(user);
 display(user2);
 display(user3);
 display(user4);

