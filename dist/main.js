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
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'ITdepartment');
        this.admin = admin;
    }
}
;
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(employee) {
        if (employee === 'Atomlesmmind') {
            return;
        }
        super.addEmployee(employee);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
;
const it = new ITDepartment('D3', ['kansihka']);
it.addEmployee('Atomlesmmind');
console.log(it);
const Accounting = new AccountingDepartment('A6', ['HR Reports', 'IT Reports']);
Accounting.addEmployee('Atomlesmmind');
Accounting.addEmployee('Atomlesmmind from Accounting');
Accounting.addReport('Accountion Reports');
Accounting.printEmployee();
Accounting.printReports();
console.log(Accounting);
//# sourceMappingURL=main.js.map