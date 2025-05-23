let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` }
};

let address = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13, postalCode: 51225,
    getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}` }
};

type namesType = typeof names;
type addressType = typeof address;

function createCombinedFunction(names: namesType, address: addressType) {
    return function (combinedObject: namesType & addressType) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    }
}

let combinedFunction = createCombinedFunction(names, address);
let combinedPerson = Object.assign({}, names, address);
combinedFunction(combinedPerson);