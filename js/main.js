function add(number1, number2) {
    return number1 + number2;
}
function printResult(value) {
    console.log('Result ' + value);
}
var combineValues;
combineValues = add;
console.log(combineValues(1, 2));
