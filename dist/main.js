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
//# sourceMappingURL=main.js.map