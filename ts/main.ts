function Logger(loggingString:string){
return function (constructor:Function){
  console.log(loggingString);
  console.log(constructor);
}
}

function Component(template:string, hookId:string){
 return function (constructor:any){
      const hookEl =  document.getElementById(hookId);
      const data = new  constructor()
      if(hookEl){
        hookEl.innerHTML = template
        hookEl.querySelector('h1')!.textContent = data.name
      }
 }
}

@Component('<h1>Hi</h1>','app')
class Person{
  name= 'kanishka';
  constructor(){
    console.log('Creating Object');
    
  }
}

// const person = new Person();
// console.log(person);
