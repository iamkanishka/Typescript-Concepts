"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('department is ' + this.name);
    }
}
let department = new Department('Science');
department.describe();
let departmentCopy = { name: 'kanishka', describe: department.describe };
console.log(departmentCopy);
departmentCopy.describe.bind(department)();
//# sourceMappingURL=main.js.map