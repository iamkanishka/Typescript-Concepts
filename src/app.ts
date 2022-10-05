
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
        public people: number,
        public status: ProjectStatus,
    ) { }
}


type Listener<T> = (projects: T[]) => void

class State<T>{
    protected listeners:  Listener<T>[] = []
    addListener(listener: Listener<T>) {
        this.listeners.push(listener)
    }

}
class ProjectState extends State<Project> {
    private static instance: ProjectState;
    private projects: Project[] = []

    private constructor() {
        super()
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new ProjectState();
        return this.instance
    }

   

    addProject(title: string, description: string, people: number) {
        const project = new Project(Math.random().toString(), title, description, people, ProjectStatus.Active)
        this.projects.push(project)
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects)

        }
    }
}
const projectState = ProjectState.getInstance();

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



        this.configure();
    }
    private configure() {
        this.formEl.addEventListener('submit', this.submitHandler)
    }
    @autoBind
    private submitHandler(event: Event) {
        event.preventDefault()
        const userInput = this.gatherInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput
           // console.log(userInput);
            projectState.addProject(title, description, people)

            this.clearInput();

        }

    }

    private clearInput() {
        this.titleEl.value = "";
        this.descriptionEl.value = "";
        this.peopleEl.value = "";

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


class ProjectLists {
    assignedProjects: Project[] = []
    constructor(private type:string) {
        projectState.addListener((projects: Project[]) => {
          //  this.assignedProjects = projects
           const relevantProjetcs = projects.filter(project=>{
            if(this.type==='active'){
                return project.status === ProjectStatus.Active;
            }
            return project.status === ProjectStatus.Completed;

           })  
           this.assignedProjects = relevantProjetcs
          this.renderProjects()

        })
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
        listEl.innerHTML=''
        for (const project of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.innerHTML = project.title;
            listEl.appendChild(listItem);
        }
    }
}


const projectInput = new ProjectInput()
const activeProjectList = new ProjectLists('active')
const finishedProjectList = new ProjectLists('finished')
