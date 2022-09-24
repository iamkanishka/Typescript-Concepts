let userInput:unknown;
let userName:string;
userInput = 5;
userInput ="kanishka"

if(typeof userInput === 'string'){
  userName =  userInput
}
 
function generateError(message:string, code:number):never{
  throw {message, code};
  //return;
}
function generate():void{
    console.log('hello');
    return;
}

console.log(generate());

try{

let result  = generateError('Invalid Error', 500);
console.log(result);
}catch(err){
    console.log(err);
    
}
