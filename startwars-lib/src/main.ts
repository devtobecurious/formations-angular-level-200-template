import { WookieeI, WookieeC } from './wookiee';
const wookieC = new WookieeC();
wookieC.name = 'Chewbacca';

const wookieCC: WookieeC = {
    name: 'Chewbacca'
}

const wookieI: WookieeI = {
    name: 'Chewbacca'
}

const w = {
    name: 'Chewbacca'
};

type TypeName = {
    name: string
}

type SuperType = {
    surname: string
} & TypeName;

function afficherWookie(wookie: TypeName): void {
    console.log(wookie.name);
}

afficherWookie(wookieC);
afficherWookie(wookieCC);
afficherWookie(wookieI);
afficherWookie(w);



function affichageJeSaisPas(test: unknown): void {
    if (typeof (test) === 'string') {
        console.log(test.toLowerCase());
    }
}

affichageJeSaisPas({ plop: 'plop' });
affichageJeSaisPas(wookieC);
