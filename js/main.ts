function add(number1:number, number2:number):number{
    return number1 + number2;
}

function printResult(value:number):void{
    console.log('Result ' + value );
}

console.log(printResult(add(1,2)))

