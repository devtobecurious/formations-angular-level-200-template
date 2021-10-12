export interface EnemyDto {
  id: number;
  name: string;
}

// SSI regles fonctionnelles
export class Enemy implements EnemyDto {
  id !: number;
  name !: string;

  /**
   *
   */
  constructor(dto: EnemyDto) {
  }
}
