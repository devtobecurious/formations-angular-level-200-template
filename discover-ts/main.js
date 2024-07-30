"use strict";
class Wookiee {
    constructor() {
        this.name = 'Chewie';
    }
}
function afficherWookiee(wookiee) {
    console.info(wookiee.name);
}
afficherWookiee(new Wookiee());
afficherWookiee({ name: 'Chewiee' });
