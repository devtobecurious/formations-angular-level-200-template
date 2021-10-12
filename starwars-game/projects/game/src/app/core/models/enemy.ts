export interface EnemyDto {
  id: number;
  name: string;
  eyeColor: string;
}

// SSI regles fonctionnelles
export class Enemy implements EnemyDto {
  id !: number;
  name !: string;
  eyeColor !: string;

  /**
   *
   */
  constructor(dto: EnemyDto) {
  }
}
