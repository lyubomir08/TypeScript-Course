"use strict";
class Product {
    static productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.productCount++;
        this.id = Product.productCount;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length < 1) {
            throw new Error('Name must be at least 1 character');
        }
        this._name = newName;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (newPrice <= 0) {
            throw new Error('Price must be greater than 0');
        }
        this._price = newPrice;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}
class Inventory {
    products;
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        let arr = [];
        this.products.forEach(p => arr.push(p.getDetails()));
        arr.push(`Total products created: ${this.products.length}`);
        return arr.join('\n');
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
// expected errors
// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
//# sourceMappingURL=13.js.map