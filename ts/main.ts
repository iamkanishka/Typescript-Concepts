interface Person {
  name: string,
  age: number,
  hello(phrase: string): void
}

let kanishkaperson= {
  name: "Kanishka",
  age: 30,
  hello(phrase: string) {
    console.log(phrase);

  }
}
let johnperson: Person= {
  name: "john",
  age: 30,
  hello(phrase: string) {
    console.log(phrase);
  }
}