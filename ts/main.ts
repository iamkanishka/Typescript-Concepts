function Logger(loggingString:string){
  console.log('logger Factory');
  
return function (constructor:Function){
  console.log(loggingString);
  console.log(constructor);
}
}

function Component(template:string, hookId:string){
  console.log('Template Factory');

 return function (constructor:any){
  console.log('Componenet decorator');
  
      const hookEl =  document.getElementById(hookId);
      const data = new  constructor()
      if(hookEl){
        hookEl.innerHTML = template
        hookEl.querySelector('h1')!.textContent = data.name
      }
 }
}
@Logger('hi this is from kanishka from logger decorator')
@Component('<h1>Hi</h1>','app')
class Person{
  name= 'kanishka';
  constructor(){
    console.log('Creating Object');
    
  }
}

// const person = new Person();
// console.log(person);
