interface Lengthy{
  length:number
}

function getCountandDescribe<T extends Lengthy>(element:T):[T,string]{
  let text = 'Got No Value';
  if(element.length==1){
    text='Got 1 value';
  }
  if(element.length>1){
    text='Got'+ element.length +'value';
  }

  return [element, text]
}

console.log(getCountandDescribe(['zdfv']));

function extractObject<T extends object, U extends keyof T>(obj:T, key:U){
  return obj[key];
}

extractObject({name:"kanishka",age:77},'age')
