"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    hello(phrase) {
        console.log('phrase' + phrase);
    }
    greet() {
        console.log('Hi ' + this.name);
    }
}
let kanishka = new Person('kanishka', 55);
let john = new Person('john', 55);
kanishka.hello('Hello Kanishka');
kanishka.greet();
john.hello('Hello john');
//# sourceMappingURL=main.js.map