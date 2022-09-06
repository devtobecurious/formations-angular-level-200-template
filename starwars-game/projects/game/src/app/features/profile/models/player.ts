
// id ?
// pourquoi interface ?
// class qui implémente les interfaces, et pourquoi ?
// archi objet => revoir le nb de classe
// tous les modeles au meme endroit ou en plusieurs fichiers ?
// pourquoi pas des type "tout simplement" ?

// type vs interface vs class

// Bonnes pratiques
// class => côté front ?
// interface => recup api
// type => erreur

// Feature Model, Business Object
// class => Business Object => propose ses méthodes d'utilisation
// interface => dto => interface des services
// type => mapde l'api, alias, erreur

export interface CharacterDto {
  prenom: string;
}

/*
 *
 */
export interface CharacterDto2 {
  force: ForceDto;
  prenom: string;
  photo: string;
  arme: ArmeDto;
}

export interface ArmeDto {
  id: number;
  nom: string;
  capaciteSpeciale?: string;
}

export interface ForceDto {
  id: number;
  nom: string;
}


const uneForce:ForceDto = {
  id: 1,
  nom: 'test'
};

const uneForce2 = {
  id: 1,
  nom: 'test'
};

/**** */
// class Force {
//   id !: number;
//   nom ?: string;

//   constructor(_id: number) {
//     // this.id = id;
//   }
// }



class Force {
  puissance !: number;

  constructor(public id: number, public nom ?: string) {
  }
}

const force: Force = new Force(3);
force.id = 1;
force.nom = 'Lumineux';

const force2: Force = {
  id: 2,
  nom: 'Obscur',
  puissance: 10
}

function utiliserForce(force: Force):void {
  force.puissance = 55;
}

type ForceTyped = {id: number, nom ?: string, puissance: number};

type ForceOrColor = ForceTyped | string;

function verifTypeGuard(force: ForceOrColor) {
  if (typeof(force) == 'string') {
    console.info(force.toLowerCase());
  } else {
    console.info(force.id);
  }
}



type ForceCouleurSabre = {
  sabreLaser: {
    color: string
  }
} & ForceTyped;


function utiliserForceTyped(force: ForceTyped):void {
  force.puissance = 55;
}

utiliserForce(force);
utiliserForce(force2);
utiliserForce({id: 3, nom: 'mode', puissance: 18});


utiliserForceTyped(force);
utiliserForceTyped(force2);
utiliserForceTyped({id: 3, nom: 'mode', puissance: 18});
