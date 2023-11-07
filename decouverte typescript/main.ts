type Nullable<T> = T | null | undefined;

class Jedi {
    // prenom: string | undefined | null;
    prenom: Nullable<string>;
}

interface Jedi2 {

}

type AvecPrenom = {
    prenom: Nullable<string>
}

function afficherPrenom(item: AvecPrenom): void {
    console.info(item.prenom);
}

const luke = new Jedi();
//luke.prenom = 'luke';
afficherPrenom(luke);

const leia: Jedi = {
    prenom: 'leia'
}

afficherPrenom(leia);
afficherPrenom({prenom: 'Anakin'});
