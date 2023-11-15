"use strict";
class SearchItemC {
    constructor() {
        this.value = '';
    }
}
const monItem = new SearchItemC();
const search = {
    value: ''
};
function afficherValue(search) {
    console.info(search.value);
}
afficherValue(monItem);
afficherValue(search);
afficherValue({ value: '' });
const variable = {
    value: '',
    undeuxiemechamp: ''
};
afficherValue(variable);
const var2 = {
    value: ''
};
