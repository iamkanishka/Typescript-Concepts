function Logger(loggingString:string){
return function (constructor:Function){
  console.log(loggingString);
  console.log(constructor);
}
}

@Logger('logging for the Person class from the decorator Factory')
class Person{
  name= 'kanishka';
  constructor(){
    console.log('Creating Object');
    
  }
}

// const person = new Person();
// console.log(person);
