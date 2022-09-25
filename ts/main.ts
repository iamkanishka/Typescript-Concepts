// type addfunc=(a:number,b:number)=>number;

interface addfunc {
  (a: number, b: number): number
}

var add: addfunc
add = (x: number, y: number) => { return x + y }

interface IName {
  readonly name: string
  secondName?: string

}

interface IPerson extends IName {
  age?: number,
  hello(phrase: string): void
}


class Person implements IPerson {
  constructor(public name: string, public age?: number) { };
  hello(phrase: string,): void {
    if (this.age) {
      console.log('phrase' + phrase + "My Age is " + this.age);
    } else {
      console.log('phrase' + phrase);

    }
  }

  greet() {
    console.log('Hi ' + this.name);

  }
}

let kanishka: Person = new Person('kanishka')
let john: IPerson = new Person('john', 55)


kanishka.hello('Hello Kanishka');
kanishka.greet()
john.hello('Hello john');

