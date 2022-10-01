function merge<T, U>(objA: T, objB:U){
  return Object.assign(objA!,objB);
  
}

const data = merge({name:'Kanishka'},{age:30});

console.log(data.age);


