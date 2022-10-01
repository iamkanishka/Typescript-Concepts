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


class dataStorage<T>{
  public data:Array<T> =[];
  addData(item:T){
    this.data.push(item);
   }
   
   removeData(item:T){
    this.data.splice(this.data.indexOf(item),1)
   }

   getData(){
    return [...this.data]
   }
   

}

const stringStorage = new dataStorage<string>();

stringStorage.addData('kanishka');
stringStorage.addData('naik');
stringStorage.addData('Gadgetguy');
stringStorage.addData('saxasxasx');
stringStorage.removeData('naik')
console.log(stringStorage.getData());


const numberStorage = new dataStorage<number>();

numberStorage.addData(1);
numberStorage.addData(2);
numberStorage.addData(3);
numberStorage.addData(3);
numberStorage.removeData(2)
console.log(numberStorage.getData());




const objectStorage = new dataStorage<object>();
let obj={name:'kanishka'}
objectStorage.addData(obj);
objectStorage.addData({name:'naik'});
objectStorage.addData({name:'gadgetguy'});
objectStorage.removeData(obj)
console.log(objectStorage.getData());



