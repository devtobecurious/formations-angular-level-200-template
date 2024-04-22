export interface AvecPrenom {
    prenom: string
}

export class Wookiee implements AvecPrenom {
    constructor() {}

    prenom = 'Chewie'
}

export class Wookiee2 {
    constructor() {}

    prenom = 'Chewie'
}

const chewie = new Wookiee();

const chewieBis: Wookiee = {
    prenom: 'chewie'
}

const chewieTres = {
    prenom: 'chewie'
}

//const wookie2 = new Wookiee2();

type PrenomControle = {prenom: string}

function afficherPrenomWookiee(wookiee: PrenomControle): void {
    console.info(wookiee.prenom);
}

afficherPrenomWookiee(chewie);
afficherPrenomWookiee(chewieBis);
afficherPrenomWookiee(chewieTres);
//afficherPrenomWookiee(wookie2);