import {Wookiee} from './wookiee'

//const wookiee = new Wookiee('chewie')

type WithName = {
    name: string
}

function display(wook: WithName): void {
    console.info(wook.name)
}

const wookBis: Wookiee = {
    name: 'chewie'
}

//display(wookiee)
display(wookBis)
display({name: 'chewie'})
const wookT: WithName = {
    name: 'ree'
}