"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(loggingString) {
    console.log('logger Factory');
    return function (constructor) {
        console.log(loggingString);
        console.log(constructor);
    };
}
function Component(template, hookId) {
    console.log('Template Factory');
    return function (constructor) {
        console.log('Componenet decorator');
        const hookEl = document.getElementById(hookId);
        const data = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = data.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'kanishka';
        console.log('Creating Object');
    }
};
Person = __decorate([
    Logger('hi this is from kanishka from logger decorator'),
    Component('<h1>Hi</h1>', 'app')
], Person);
function Log(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price Shold be pisitive number');
        }
    }
    getPricewithTax(tax) {
        return this._price;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const product = new Product('new Product', 12);
console.log(product);
//# sourceMappingURL=main.js.map