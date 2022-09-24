function add(number1:number, number2:number):number{
    return number1 + number2;
}

function printResult(value:number):void{
    console.log('Result ' + value );
}

let combineValues:(a:number, b:number)=>number;

combineValues =add

console.log(combineValues(1,2));


