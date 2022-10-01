interface Admin {
  name: string;
  roles: string[]
}

interface Employee {
  name: string;
  startDate: Date
}

interface superEmployee extends Admin, Employee { }

let emp: superEmployee = {
  name: 'Kanishka',
  roles: ['admin'],
  startDate: new Date()
}

type combinable = number | string;
type numeric = number | boolean

type universal = combinable & numeric;

var x: universal = 10

function getAdd(a: combinable, b: combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Admin | Employee

function printEmployee(emp: unknownEmployee) {
  console.log('name' + emp.name);
  if ('roles' in emp) {
    console.log('roles' + emp.roles);
  };
  if ('startDate' in emp) {
    console.log('startt Date' + emp.startDate);
  }
}

printEmployee(emp)
printEmployee({ name: 'Kanishka', startDate: new Date() })


class Car {
  drive() {
    console.log('driving Car ..');

  }
}

class Truck {
  drive() {
    console.log('driving Truck ..');

  }

  loadingCargo(ammount: number) {
    console.log('loading ammount ' + ammount);

  }
}

type vehicle = Car | Truck

function usevehicle(veh: vehicle) {
 veh.drive()
 // if ('loadingCargo' in veh) {
  if (  veh instanceof Truck) {
  veh.loadingCargo(99)
  }
}

const v1= new Car;
const v2= new Truck;

usevehicle(v1);
usevehicle(v2);

