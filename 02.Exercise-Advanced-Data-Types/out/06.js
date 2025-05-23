"use strict";
let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}`; }
};
let address = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13, postalCode: 51225,
    getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`; }
};
function createCombinedFunction(names, address) {
    return function (combinedObject) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    };
}
let combinedFunction = createCombinedFunction(names, address);
let combinedPerson = Object.assign({}, names, address);
combinedFunction(combinedPerson);
//# sourceMappingURL=06.js.map