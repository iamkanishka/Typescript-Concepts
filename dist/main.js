"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validatorObj = {};
function Required(target, name) {
    console.log(target, name);
    const className = target.constructor.name;
    console.log(className);
    validatorObj[className] = Object.assign(Object.assign({}, validatorObj[className]), { [name]: ['required'] });
    console.log(validatorObj);
}
function Positive(target, name) {
    console.log(target, name);
    const className = target.constructor.name;
    console.log(className);
    validatorObj[className] = Object.assign(Object.assign({}, validatorObj[className]), { [name]: ['positive'] });
    console.log(validatorObj);
}
function validate(obj) {
    let validatorName = validatorObj[obj.constructor.name];
    if (!validatorName) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName) {
        for (const validator of validatorName[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && obj[prop];
                    break;
                case 'positive':
                    isValid = obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEL = document.getElementById('course-title');
    const priceEL = document.getElementById('course-price');
    const title = titleEL.value;
    const price = +priceEL.value;
    const courseObj = new Course(title, price);
    if (!validate(courseObj)) {
        alert('Input values are not validate');
    }
    console.log(courseObj);
});
//# sourceMappingURL=main.js.map