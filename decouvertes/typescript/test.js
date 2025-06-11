"use strict";
// function display(item: any): void {
//     console.info(item.toLowerCase())
// }
// function display(item: unknown): void {
//     if (typeof item === 'string') {// type guard
//         console.info(item.toLowerCase());
//     } else if (typeof item === 'number') {
//         console.info(item.toString());
//     } else if (item === undefined) {
//         console.info('undefined', item);
//     } else {
//         console.info('unknown');
//     }
//     //console.info(item.toLowerCase())
// }
class Wookiee {
    constructor() {
        this.name = '';
    }
}
function display(item) {
    console.info(item.name);
}
// const wookie = new Wookiee()
// display(wookie) 
// const wook: Wookiee = {
//     name: 'Yoda'
// }
// display(wook)
const wokBis = {
    name: 'test',
    power: 10
};
display(wokBis);
