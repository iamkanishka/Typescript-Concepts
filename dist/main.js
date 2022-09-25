"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`department with id ${this.id} : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length, this.employees);
    }
}
let department = new Department('D1', 'Science');
department.describe();
department.addEmployee('Kanishka');
department.addEmployee('Atomlessmind');
department.printEmployee();
//# sourceMappingURL=main.js.map