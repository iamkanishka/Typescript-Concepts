function logger(constructor:Function){
  console.log('logging the data');
  console.log(constructor);
  
  
}
@logger
class Person{
  name= 'kanishka';
  constructor(){
    console.log('Creating Object');
    
  }
}

// const person = new Person();
// console.log(person);
