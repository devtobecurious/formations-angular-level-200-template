interface IWithName {
    name: string
}

class Wookiee  {
    name = 'Chewie'
}

const wookie = new Wookiee();

const wookie2: IWithName = {
    name: 'Chewie ii'
}

function afficherInfosWookiee(item: IWithName): void {
    console.info(item.name);
}
 
afficherInfosWookiee({name: 'coucou'})
afficherInfosWookiee(wookie)