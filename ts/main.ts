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

function getAdd(a: string, b: string):string;
function getAdd(a: number, b: number):number;
function getAdd(a: string, b: number):string;
function getAdd(a: number, b: string):number;
function getAdd(a: combinable, b: combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = getAdd(1,4);


const userData={
  name:'Kanishka',
  job:{title:'CEO', description:'My Company'},

}

console.log(userData?.job?.title);

const userInput = null;
//const storedData = userInput || 'Default';
const storedData = userInput ?? 'Default';

console.log(storedData);


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


interface Bird{
  type:'bird'
  flyingSpeed:number;
}

interface Horse{
  type:'horse'
  runningSpeed:number;
}

interface Snake{
  type:'snake'
  crawlingSpeed:number;
}

type Animal = Bird | Horse | Snake

function checkAnimalSpeed(animal:Animal){
  let speed =0
  switch(animal.type){
     case 'bird':
      speed= animal.flyingSpeed;
      break;
      case 'horse':
        speed = animal.runningSpeed;
        break;
       case 'snake':
        speed = animal.crawlingSpeed
 }
       
    console.log('Speed oof the Animal is :'+ speed);
      

}

const snake:Snake ={
   crawlingSpeed : 30,
   type:'snake'
}

const bird:Bird ={
  flyingSpeed : 40,
  type:'bird'
}

const horse:Horse ={
  runningSpeed : 20,
  type:'horse'
}

checkAnimalSpeed(snake);
checkAnimalSpeed(horse);
checkAnimalSpeed(bird);

const paragraph = <HTMLInputElement> document.getElementById('user-input');
paragraph.value = 'user Input'

if(paragraph){
  (paragraph as HTMLInputElement).value='user Inputt'
}


interface ErrorContaincer{
  [prop:string]: string
}

let errorbag:ErrorContaincer ={
  email:'Email is Valid',
  username:'UserName is Valid',
};


