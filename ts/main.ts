
function Autobind(target:any, name:string, descriptor:PropertyDescriptor){
  console.log(descriptor);
  const orginalMethod  = descriptor.value

  const desc:PropertyDescriptor ={
    configurable :true,
    enumerable:false,
    get(){
      return orginalMethod.bind(this)
    }
  }
  return desc
  
}

class Person{
  message ="hai kanishka";

  @Autobind
  getMessage(){
    console.log(this.message);

 }
}

const button = document.querySelector('button');
const p = new Person();
button?.addEventListener('click',p.getMessage);



