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
function Component(template, hookId) {
    return function (constructor) {
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
    Component('<h1>Hi</h1>', 'app')
], Person);
//# sourceMappingURL=main.js.map