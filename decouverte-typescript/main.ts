import { Wookiee } from "./wookiee" 

interface IWookiee {
    surname: string
}

// class Wookiee implements IWookiee {
//     surname = 'Chewie'
// }

const wookiee: IWookiee = {
    surname: 'Chew'
}

type WithName = {surname: string}
type WithNameAndSurname = WithName & {name: string}

type Prop = {
    prop: WithName,
    prop2: WithNameAndSurname
}
const monItem: Prop = {
    prop: { surname: ''},
    prop2: {surname: '', name: ''}
}

function displayWookiee(item: WithName): void {
    console.info(item.surname)
}

displayWookiee(wookiee)
// displayWookiee(new Wookiee())