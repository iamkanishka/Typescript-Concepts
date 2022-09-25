class Department {

  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) { }

  describe(this: Department) {
    console.log(`department with id ${this.id} : ${this.name}`);

  }

  addEmployee(employee: string) {

    this.employees.push(employee)
  }
  printEmployee() {
    console.log(this.employees.length, this.employees);

  }


}

class ITDepartment extends Department {
  constructor(id: string, public readonly admin: string[]) {
    super(id, 'ITdepartment');

  }
};

class AccountingDepartment extends Department {
  private lastRecord: string;
  constructor(id: string, public readonly reports: string[]) {
    super(id, 'Accounting');
    this.lastRecord = reports[0]
  }
  addEmployee(employee: string) {
    if (employee === 'Atomlesmmind') {
      return
    }
    super.addEmployee(employee)
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastRecord = report

  }
  printReports() {
    console.log(this.reports);

  }

  get mostRecentReport() {
    if (!this.lastRecord) {
      throw new Error('No Reports Found');
    }
    return this.lastRecord
  }

  set setRecentReport(value: string) {
    if (!value) { throw new Error('No Reports Found'); }
    this.addReport(value);
  }

};

const it = new ITDepartment('D3', ['kansihka'])
it.addEmployee('Atomlesmmind');

console.log(it);

const Accounting = new AccountingDepartment('A6', ['HR Reports', 'IT Reports'])
Accounting.addEmployee('Atomlesmmind');
Accounting.addEmployee('Atomlesmmind from Accounting');
Accounting.addEmployee('Goku');
Accounting.addEmployee('Arjith Singh');

Accounting.addReport('Accountion Reports');
Accounting.addReport('Science Reports');
Accounting.addReport('Film Reports');
console.log(Accounting.mostRecentReport);

Accounting.setRecentReport = "OTT Reports"
console.log(Accounting.mostRecentReport);

Accounting.printEmployee();
Accounting.printReports()
console.log(Accounting);




