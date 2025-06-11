type NumberOrStringOrUndefined = number | string | undefined

let age: NumberOrStringOrUndefined = 13
age = 0
age = '13'
age = undefined

let year: NumberOrStringOrUndefined = 2023


interface Jedi {
    name: string
    power: number
}

let leia: Jedi = {
    name: 'Leia Organa',
    power: 9001
}

