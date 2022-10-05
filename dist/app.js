"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autoBind(target, name, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        }
    };
    return newDescriptor;
}
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Completed"] = 1] = "Completed";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, people) {
        const project = new Project(Math.random().toString(), title, description, people, ProjectStatus.Active);
        this.projects.push(project);
        this.updateListeners();
    }
    moveProject(projecId, newStatus) {
        const project = this.projects.find(prj => prj.id === projecId);
        if (projecId && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects);
        }
    }
}
const projectState = ProjectState.getInstance();
class ProjectInput {
    constructor() {
        this.formEl = document.querySelector('form');
        this.titleEl = document.getElementById('title');
        this.descriptionEl = document.getElementById('description');
        this.peopleEl = document.getElementById('people');
        this.configure();
    }
    configure() {
        this.formEl.addEventListener('submit', this.submitHandler);
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInput();
        }
    }
    clearInput() {
        this.titleEl.value = "";
        this.descriptionEl.value = "";
        this.peopleEl.value = "";
    }
    gatherInput() {
        const title = this.titleEl.value;
        const description = this.descriptionEl.value;
        const people = +this.peopleEl.value;
        const titleValidatable = {
            value: title,
            required: true
        };
        const descriptionValidatable = {
            value: description,
            required: true,
            minLength: 4,
            maxLength: 45
        };
        const peopleValidatable = {
            value: people,
            required: true,
            min: 1,
            max: 10
        };
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert('Input Values are not valid');
            return;
        }
        return [title, description, people];
    }
}
__decorate([
    autoBind
], ProjectInput.prototype, "submitHandler", null);
class ProjectLists {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.ulElement = document.getElementById(`${this.type}-projects-list`);
        projectState.addListener((projects) => {
            const relevantProjetcs = projects.filter(project => {
                if (this.type === 'active') {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Completed;
            });
            this.assignedProjects = relevantProjetcs;
            this.renderProjects();
        });
        this.configure();
    }
    configure() {
        this.ulElement.addEventListener('dragover', this.dragOverHandler);
        this.ulElement.addEventListener('dragleave', this.dragLeaveHandler);
        this.ulElement.addEventListener('drop', this.dragHandler);
    }
    dragOverHandler(event) {
        event.preventDefault();
        this.ulElement.classList.add('droppable');
    }
    dragLeaveHandler(event) {
        this.ulElement.classList.remove('droppable');
    }
    dragHandler(event) {
        var _a;
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            let projecId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/plain');
            projectState.moveProject(projecId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Completed);
        }
        this.ulElement.classList.remove('droppable');
    }
    renderProjects() {
        this.ulElement.innerHTML = '';
        for (const project of this.assignedProjects) {
            new ProjectItem(project, this.ulElement);
        }
    }
}
__decorate([
    autoBind
], ProjectLists.prototype, "dragOverHandler", null);
__decorate([
    autoBind
], ProjectLists.prototype, "dragLeaveHandler", null);
__decorate([
    autoBind
], ProjectLists.prototype, "dragHandler", null);
class ProjectItem {
    constructor(project, element) {
        this.project = project;
        this.element = element;
        this.liElement = document.createElement('li');
        this.liElement.setAttribute('draggable', 'true');
        this.renderContent();
        this.configure();
    }
    configure() {
        this.liElement.addEventListener('dragstart', this.dragStartHandler);
        this.liElement.addEventListener('dragend', this.dragEndHandler);
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
        console.log('dragstart');
    }
    dragEndHandler(event) {
        console.log('dragend');
    }
    get person() {
        if (this.project.people === 1) {
            return "1 Person";
        }
        return `${this.project.people} Persons`;
    }
    renderContent() {
        const liData = `<h3>${this.project.title}</h3>
        <div><strong>${this.person}  Assigned</strong></div>
        <div>${this.project.description}</div>`;
        this.liElement.innerHTML = liData;
        this.element.appendChild(this.liElement);
    }
}
__decorate([
    autoBind
], ProjectItem.prototype, "dragStartHandler", null);
__decorate([
    autoBind
], ProjectItem.prototype, "dragEndHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectLists('active');
const finishedProjectList = new ProjectLists('finished');
//# sourceMappingURL=app.js.map