function Logger(loggingString:string){
  console.log('logger Factory');
  
return function (constructor:Function){
  console.log(loggingString);
  console.log(constructor);
}
}

function Component(template:string, hookId:string){
  console.log('Componenet Template Factory');

 return function <T extends {new  (...args:any[]):{name:string}}> (constructor:T){
      return class extends constructor {
        constructor(...args:any[]){
          super();
          const hookEl =  document.getElementById(hookId);
          const data = new  constructor()
          if(hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = data.name
          }
        }
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
  
  getPrice() {}
   
}


const person = new Person();

console.log(person);

function Log(target:any, propertyName:string){
 console.log(target);
 console.log(propertyName);
 
}
function Log2(target:any, propertyName:string, descriptor:PropertyDescriptor){
  console.log('Accessor Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
 }

 function Log3(target:any, propertyName:string, descriptor:PropertyDescriptor){
  console.log('Method Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
 }

 function Log4(target:any, propertyName:string, position:number){
  console.log('parameter Decorator');
  console.log(target);
  console.log(propertyName);
  console.log(position);
 }
 
 
 

class Product{
  @Log
  title: string;
  private _price: number;

  constructor(title:string, price:number){
    this.title=title
    this._price=price
  }

  @Log2
  set price(value:number){
    if(value>0){
      this._price=value
    }else{
      throw new Error('Price Shold be pisitive number')
    }
  }

  @Log3
  getPricewithTax( @Log4 tax:number){
   return this._price+tax
  }
}

const product = new Product('new Product', 12);

console.log(product);
