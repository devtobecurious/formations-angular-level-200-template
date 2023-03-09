interface GameI {
    title: string;
}

class Game {
    title = '';
}


const game = new Game();
const gamei: GameI = {
    title: 'Super partie'
}


const gameG: Game = {
    title: 'Super partie'
}

const uneIdeeDeGame = {
    title: 'Super partie bis'
}


function afficherOld(item: { title: string }): void {
    console.info(item.title);
}

type TitleType = {
    title: string
}

type StringOrEmpty = string | undefined;
type StringAndNumber = StringOrEmpty & {
    index: number
};


type Player = {
    surname: string
};
type PlayerWithName = Player & {
    name: string
};

const monPlayer: Player = {
    surname: 'luke'
};
const monPlayerN: PlayerWithName = {
    surname: 'luke',
    name: 'skywalker'
};

interface PlayerI {
    surname: string
}

interface PlayerM extends PlayerI {
    name: string
}


function afficherValue(valeur: StringOrEmpty): void {
    if (typeof(valeur) !== 'undefined') {
        console.info(valeur.toLowerCase());
    }

    if (valeur) {
        console.info(valeur.toLowerCase());
    }

    if (!!valeur) {
        console.info(valeur.toLowerCase());
    }
}
afficherValue('');
afficherValue(undefined);



function afficher(item: TitleType): void {
    console.info(item.title);
}

afficher(game);
afficher(gamei);
afficher(uneIdeeDeGame);



function afficherAuPif(value: any) {
    console.info(value.titre);
    console.info(value.toLowerCase());
}

function afficherAvecUnPeuDeControle(value: unknown): void {
    if (typeof(value) != null && typeof(value) === 'string') {
        value.concat('coucou');
    }
}