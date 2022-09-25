"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('department is ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length, this.employees);
    }
}
let department = new Department('Science');
department.addEmployee('Kanishka');
department.addEmployee('Atomlessmind');
department.printEmployee();
//# sourceMappingURL=main.js.map