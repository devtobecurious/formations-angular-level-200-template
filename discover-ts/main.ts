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


function displayValue(value: unknown): void {
    if(typeof(value) == 'string') { // typeguard
        console.info(value.toUpperCase())
    }
}
displayValue('ah que johny')
displayValue(1) // ça plante : ce n'est pas un string !!!