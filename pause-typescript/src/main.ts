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

