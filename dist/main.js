"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(loggingString) {
    return function (constructor) {
        console.log(loggingString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'kanishka';
        console.log('Creating Object');
    }
};
Person = __decorate([
    Logger('logging for the Person class from the decorator Factory')
], Person);
//# sourceMappingURL=main.js.map