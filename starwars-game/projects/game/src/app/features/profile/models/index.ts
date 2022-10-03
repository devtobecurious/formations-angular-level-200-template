export interface ProfilDto {
  surname: string,
  typeForce: string
}

// Business Object
export class Profil implements ProfilDto {
  surname !: string;
  typeForce !: string;

  // constructor(private item: ProfilDto) {
  //   //
  // }

  // get maprop() {
  //   return '';
  // }
}

function AfficherProfil(profil: ProfilType) {
  console.info(profil);
}

const unProfil: ProfilDto = {
  surname: 'Luke',
  typeForce: 'Light'
};

const unProfil2: Profil = {
  surname: 'Leia',
  typeForce: 'Light'
};

const unProfil3 = new Profil();

AfficherProfil(unProfil);
AfficherProfil(unProfil2);


const unProfil4 = {
  surname: 'Anakin',
  typeForce: 'Dark'
}
AfficherProfil(unProfil4);

type ProfilType = {
  surname: string,
  typeForce: string
}

type EnemyProfilType = ProfilType & {
  power: number
}
const unEnemy: EnemyProfilType = {
  surname: 'Qui Gon',
  typeForce: 'Light',
  power: 100
}

const unProfil5: ProfilType = {
  surname: 'Ashoka',
  typeForce: 'Light'
}
AfficherProfil(unProfil5);

export type ChaineOuEntier = string | number;
export type TypeForce = 'Light' | 'Dark' | 'Any';

function Calculer(): ChaineOuEntier {
  return '';
}

function ChoixForce(force: TypeForce) {
  switch (force) {
    case 'Any':

      break;

      case 'Dark':

        break;

    default:
      break;
  }
}

function Afficher(item: ChaineOuEntier): void {
  if (typeof(item) !== 'string') {
    console.info(item);
  } else  {
    console.info(item);
  }
}

