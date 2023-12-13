export interface Wookiee {
    nbPoils: number;
    taille: number;
}


// const chewie: Wookiee = new Wookiee();

const chewie2: Wookiee = {
    taille: 2.3,
    nbPoils: 1000000
};

type NbPoils = { nbPoils: number };
function afficherNbPoils(wookiee: NbPoils): void {
    console.log(wookiee.nbPoils);
}
//afficherNbPoils(chewie);
afficherNbPoils(chewie2);
afficherNbPoils({ nbPoils: 1000000 });
