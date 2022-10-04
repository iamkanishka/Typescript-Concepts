
function autoBind(target:any, name:string, descriptor:PropertyDescriptor){
//  console.log('target: ',target);
//  console.log('name: ',name);
//  console.log('descriptor: ', descriptor);
  const originalMethod = descriptor.value

 const newDescriptor:PropertyDescriptor={
    configurable:true,
    get(){
        return originalMethod.bind(this)
    }
 }
 return newDescriptor
 
}

enum ProjectStatus{
    Active,
    Completed
}

class Project{
    constructor(
        public id:string,
        public title:string,
        public description:string,
        public people:string,
        public status:ProjectStatus,
     ){}
}

class ProjectInput{
    formEl: HTMLFormElement;
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    projectEl: HTMLInputElement;


    constructor(){
        this.formEl = document.querySelector('form') as HTMLFormElement
        this.titleEl = document.getElementById('title') as HTMLInputElement
        this.descriptionEl = document.getElementById('description') as HTMLInputElement
        this.projectEl = document.getElementById('people') as HTMLInputElement


        
        this.configure()
    }
    private configure(){
      this.formEl.addEventListener('submit',this.submitHandler)
    }
    @autoBind
    private submitHandler(event:Event){
        event.preventDefault()
        const title = this.titleEl.value;
        const description = this.descriptionEl.value;
        const project = this.projectEl.value;

        console.log(title, description, project);
        
    }
}


const projectInput = new ProjectInput()