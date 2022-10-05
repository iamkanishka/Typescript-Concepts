
function autoBind(target: any, name: string, descriptor: PropertyDescriptor) {
    //  console.log('target: ',target);
    //  console.log('name: ',name);
    //  console.log('descriptor: ', descriptor);
    const originalMethod = descriptor.value

    const newDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this)
        }
    }
    return newDescriptor

}




interface Validatable {
    value: string | number
    required?: true;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;


}
function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
    }

    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max
    }

    return isValid
}

enum ProjectStatus {
    Active,
    Completed
}

class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: string,
        public status: ProjectStatus,
    ) { }
}

class ProjectInput {
    formEl: HTMLFormElement;
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;


    constructor() {
        this.formEl = document.querySelector('form') as HTMLFormElement
        this.titleEl = document.getElementById('title') as HTMLInputElement
        this.descriptionEl = document.getElementById('description') as HTMLInputElement
        this.peopleEl = document.getElementById('people') as HTMLInputElement



        this.configure()
    }
    private configure() {
        this.formEl.addEventListener('submit', this.submitHandler)
    }
    @autoBind
    private submitHandler(event: Event) {
        event.preventDefault()
       const userInput =  this.gatherInput();
       if(Array.isArray(userInput)){
        const [title, description, people] =userInput
        console.log(userInput);
        this.clearInput();
        
       }

    }

    private clearInput(){
        this.titleEl.value="";
        this.descriptionEl.value="";
        this.peopleEl.value="";

    }

    private gatherInput(): [string, string, number] | void {
        const title = this.titleEl.value;
        const description = this.descriptionEl.value;
        const people = +this.peopleEl.value;
        const titleValidatable: Validatable = {
            value: title,
            required: true
        }

        const descriptionValidatable: Validatable = {
            value: description,
            required: true,
            minLength: 4,
            maxLength: 45
        }

        const peopleValidatable: Validatable = {
            value: people,
            required: true,
            min: 1,
            max: 10
        }



        if (
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert('Input Values are not valid');
            return
        }


        return [title, description, people]

    }
}


const projectInput = new ProjectInput()