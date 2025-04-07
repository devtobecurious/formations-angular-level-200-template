console.log('ah que johny')

interface Wookiee {
    name: string;
    age: number;
    isJedi: boolean;
}

function displayWookiee(wookiee: Wookiee) {
    console.log(wookiee.name);
    console.log(wookiee.age);
    console.log(wookiee.isJedi);
}