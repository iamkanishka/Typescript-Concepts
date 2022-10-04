interface validationConfig{
  [property:string]:{
    [validationProperty:string]:string[]
  }
  // course:{
  //   title:['required'],
  //   price:['required'],

  // }
}

function Required(target:any, name:string){

}
class Course{
   @Required
   title:string;
   
   @Required
   price:number;
   constructor(title:string, price:number){
    this.title=title;
    this.price=price;
   }
}

const form = document.querySelector('form')!;

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const titleEL = document.getElementById('course-title') as HTMLInputElement;
  const priceEL = document.getElementById('course-price') as HTMLInputElement;
 
   const title = titleEL.value;
   const price = +priceEL.value;

   const courseObj = new Course(title, price);
   console.log(courseObj);
   

})