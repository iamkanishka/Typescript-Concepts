interface IPerson {
  name: string,
  age:number,
  hello(phrase: string): void
}


class Person implements IPerson{
   constructor(public name:string, public age:number){};
    hello(phrase: string, ): void {
        console.log('phrase'+phrase);
     }

     greet(){
      console.log('Hi ' + this.name);
      
     }
}

let kanishka:Person = new Person('kanishka' , 55)
let john: IPerson = new Person('john' , 55)

kanishka.hello('Hello Kanishka');
kanishka.greet()
john.hello('Hello john');

