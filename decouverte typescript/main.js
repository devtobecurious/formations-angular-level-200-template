"use strict";
class Jedi {
}
function afficherPrenom(item) {
    console.info(item.prenom);
}
const luke = new Jedi();
//luke.prenom = 'luke';
afficherPrenom(luke);
const leia = {
    prenom: 'leia'
};
afficherPrenom(leia);
afficherPrenom({ prenom: 'Anakin' });
