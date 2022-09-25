"use strict";
var add;
add = (x, y) => { return x + y; };
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    hello(phrase) {
        if (this.age) {
            console.log('phrase' + phrase + "My Age is " + this.age);
        }
        else {
            console.log('phrase' + phrase);
        }
    }
    greet() {
        console.log('Hi ' + this.name);
    }
}
let kanishka = new Person('kanishka');
let john = new Person('john', 55);
kanishka.hello('Hello Kanishka');
kanishka.greet();
john.hello('Hello john');
//# sourceMappingURL=main.js.map