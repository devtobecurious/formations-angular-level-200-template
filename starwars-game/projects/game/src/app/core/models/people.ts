// export class People {
// }

export interface PeopleDto {
  id: number;
}

export class People {
  constructor(private dto: PeopleDto) {
  }

  get id(): number {
    return this.dto.id;
  }
}

const people = new People({id: 1});
console.info(people.id);
