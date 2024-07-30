class Wookiee {
    name = 'Chewie'
}

interface IWookiee {
    name: string;
}

interface SuperWookiee extends IWookiee {
    power: number
}

type TWookiee = {
    name: string
}
type TWookieeSuper = { power: number} & TWookiee;

function afficherWookiee(wookiee: TWookiee): void {
    console.info(wookiee.name);
}

afficherWookiee(new Wookiee())
afficherWookiee({ name: 'Chewiee' })
