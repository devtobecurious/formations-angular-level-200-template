"use strict";
class Wookiee {
    constructor() {
        this.name = 'Chewie';
    }
}
const wookie = new Wookiee();
const wookie2 = {
    name: 'Chewie ii'
};
function afficherInfosWookiee(item) {
    console.info(item.name);
}
afficherInfosWookiee({ name: 'coucou' });
afficherInfosWookiee(wookie);
