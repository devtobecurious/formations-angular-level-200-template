class WookieeC {
     name!: string;
}

interface Wookiee {
    name: string
}

// class Test implements Wookiee {

// }

type WithName = {name: string}
function afficherPrenom(perso: WithName): void {
    console.info(perso.name);
}

const wookie1 = new WookieeC();
const wookie2: Wookiee = {name: 'ddfdfkjd'};
afficherPrenom(wookie1);
afficherPrenom(wookie2);












const chewie: Wookiee = {
    name: 'Chewiee'
}

function createWookiee(name: string): Wookiee {
    return {name};
}