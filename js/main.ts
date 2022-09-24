enum RESUL_TYPES{
    AS_NUMBER = 'as-number',
    AS_STRING ='as-string'
}

function combine(input1:number | string, input2:number | string, resultType: RESUL_TYPES ){
    let result
    if(typeof(input1)==='number'&&typeof(input2)==='number'){
    result = input1 + input2;
     }else{
        result =  input1.toString()+input2.toString();
     }
     if(resultType==='as-number'){
     return  Number(result)
     }else{
          return  String(result)
     }
   
}

console.log(combine(1,2,'as-string'));
console.log(combine(1,2,'as-number'));

