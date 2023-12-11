function Wookiee(name) {
    this.name = name;
    console.log('Rrrrrrrrr!', this);
}

Wookiee('chewie');

const wookiee = new Wookiee('chewie 2');

function Jedi(name, side) {
    this.name = name;
    this.side = side;
    console.log('May the force be with you', this);
}
const luke = new Jedi('Luke', 'light');

const maFuturFonction = Jedi.bind(wookiee, 'Anakin');
maFuturFonction();
//Jedi.call(wookiee, 'Anakin');   contextualise une fonction et l'execute directement