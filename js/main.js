"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "kanishka";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, code };
    //return;
}
function generate() {
    console.log('hello');
    return;
}
console.log(generate());
try {
    let result = generateError('Invalid Error', 500);
    console.log(result);
}
catch (err) {
    console.log(err);
}
