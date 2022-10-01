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


function Log(target:any, propertyName:string){
 console.log(target);
 console.log(propertyName);
 
}

class Product{
  @Log
  title: string;
  private _price: number;

  constructor(title:string, price:number){
    this.title=title
    this._price=price
  }

  set price(value:number){
    if(value>0){
      this._price=value
    }else{
      throw new Error('Price Shold be pisitive number')
    }
  }

  getPricewithTax(tax:number){
   return this._price
  }
}

const product = new Product('new Product', 12);

console.log(product);
