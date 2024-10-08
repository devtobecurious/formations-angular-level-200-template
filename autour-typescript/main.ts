export class DarkVador {
    name = ''
}

export interface WithName {
    name: string
}

export class Wookiee {
    name = ''
}

const chewie = new Wookiee()
chewie.name = 'Chewie'

function displayWookiee(wookiee: WithName): void {
    console.info(wookiee.name)
}

displayWookiee(chewie)

const wookieeBis: Wookiee = {
    name: 'Chewie 1'
}
 displayWookiee(wookieeBis)
