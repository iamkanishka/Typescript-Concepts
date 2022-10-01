"use strict";
let emp = {
    name: 'Kanishka',
    roles: ['admin'],
    startDate: new Date()
};
var x = 10;
function getAdd(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = getAdd(1, 4);
function printEmployee(emp) {
    console.log('name' + emp.name);
    if ('roles' in emp) {
        console.log('roles' + emp.roles);
    }
    ;
    if ('startDate' in emp) {
        console.log('startt Date' + emp.startDate);
    }
}
printEmployee(emp);
printEmployee({ name: 'Kanishka', startDate: new Date() });
class Car {
    drive() {
        console.log('driving Car ..');
    }
}
class Truck {
    drive() {
        console.log('driving Truck ..');
    }
    loadingCargo(ammount) {
        console.log('loading ammount ' + ammount);
    }
}
function usevehicle(veh) {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadingCargo(99);
    }
}
const v1 = new Car;
const v2 = new Truck;
usevehicle(v1);
usevehicle(v2);
function checkAnimalSpeed(animal) {
    let speed = 0;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        case 'snake':
            speed = animal.crawlingSpeed;
    }
    console.log('Speed oof the Animal is :' + speed);
}
const snake = {
    crawlingSpeed: 30,
    type: 'snake'
};
const bird = {
    flyingSpeed: 40,
    type: 'bird'
};
const horse = {
    runningSpeed: 20,
    type: 'horse'
};
checkAnimalSpeed(snake);
checkAnimalSpeed(horse);
checkAnimalSpeed(bird);
const paragraph = document.getElementById('user-input');
paragraph.value = 'user Input';
if (paragraph) {
    paragraph.value = 'user Inputt';
}
let errorbag = {
    email: 'Email is Valid',
    username: 'UserName is Valid',
};
//# sourceMappingURL=main.js.map