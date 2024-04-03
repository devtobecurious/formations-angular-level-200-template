// Interface > type > class

interface AvecArme {
    arme: string;
}

interface WookieeI extends AvecArme {
    prenom: string;
}



type AvecPrenom = {
    prenom: string
}

class Wookiee implements WookieeI {
    constructor(public prenom: string, public arme: string) {}
}

const wookiee: WookieeI = new Wookiee('chewie', 'arbalet');

const wookiee2: WookieeI = {
    arme: '',
    prenom: ''
}


function afficherWookiee(wookiee: AvecPrenom): void {
    console.info(wookiee.prenom);
}
afficherWookiee(wookiee);
afficherWookiee(wookiee2);