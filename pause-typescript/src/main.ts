class SearchItemC {
    value = '';
}

const monItem = new SearchItemC();

interface SearchItem {
    value: string;
}

interface SearchItemWithCount extends SearchItem {
    count: number
}

const search: SearchItem = {
    value:  ''
}

type WithValue = {
    value: string
}
type WithValueAndCount = WithValue & {
    count: number
}

type WithValueOrUndefined = WithValueAndCount | undefined;

function afficherValue(search: WithValue): void {
    console.info(search.value);
}

afficherValue(monItem)
afficherValue(search)
afficherValue({ value: '' })

const variable = {
    value: '',
    undeuxiemechamp: ''
}
afficherValue(variable);

const var2: SearchItemC = {
    value: ''
}


/// -----------------------------------------------
// demonstration any vs unknow
// type Sabre = {
//     puissance: number
// }

// type WithSabre = {
//     sabre: Sabre
// }

function attaquerAvecSabre(item: unknown): void {
    if (typeof item === 'number') { // type guard
        const puissance = item * 1.4;
    }

    if (typeof item === 'string') {
        const url = item.replace('', '');
    }

    //const value = jedi.sabre.puissance;

}
attaquerAvecSabre({puissance: 10});
