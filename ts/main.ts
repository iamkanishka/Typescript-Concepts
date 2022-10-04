interface validationConfig {
  [property: string]: {
    [validationProperty: string]: string[]
  }
  // course:{
  //   title:['required'],
  //   price:['required'],

  // }
}

const validatorObj: validationConfig = {}

function Required(target: any, name: string) {
  console.log(target, name);
  const className = target.constructor.name
  console.log(className);
  validatorObj[className]={
    ...validatorObj[className],
    [name]:['required']
  }

  console.log(validatorObj);
  

}


function Positive(target: any, name: string) {
  console.log(target, name);
  const className = target.constructor.name
  console.log(className);
  validatorObj[className]={
    ...validatorObj[className],
    [name]:['positive']
  }

  console.log(validatorObj);
  

}

function validate(obj:any){
   let validatorName= validatorObj[obj.constructor.name];
   if(!validatorName){
    return true;
   }

   let isValid =true
   for(const prop in validatorName){
    for(const validator of validatorName[prop]){
       switch (validator){
        case 'required':
          isValid = isValid && obj[prop];
          break;
          case 'positive':
            isValid =  obj[prop]>0;
            break;
       }
    }    
   }
   return isValid
  
}
class Course {
  @Required
  title: string;

  @Positive
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const form = document.querySelector('form')!;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEL = document.getElementById('course-title') as HTMLInputElement;
  const priceEL = document.getElementById('course-price') as HTMLInputElement;

  const title = titleEL.value;
  const price = +priceEL.value;


  const courseObj = new Course(title, price);
  if(!validate(courseObj)){
    alert('Input values are not validate')
  }


  console.log(courseObj);


})