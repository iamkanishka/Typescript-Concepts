abstract class Department {

  protected employees: string[] = []
  static readonly financialYear = 2020;
  constructor(protected readonly id: string, public name: string) { }

  abstract describe(): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  static createEmployee(name: string) {
    Department.financialYear
    return { name: name }
  }
  printEmployee() {
    console.log(this.employees.length, this.employees);

  }


}

class ITDepartment extends Department {
  constructor(id: string, public readonly admin: string[]) {
    super(id, 'ITdepartment');

  }
  describe() {
    console.log('IT Department with Id: ' + this.id);

  }
};

class HRDepartment extends Department {
  constructor(id: string, public readonly admin: string[]) {
    super(id, 'ITdepartment');

  }
  describe() {
    console.log('HR Department with Id: ' + this.id);
  }
};

class AccountingDepartment extends Department {
  private lastRecord: string;
  private static Instance: AccountingDepartment;
  private constructor(id: string, public readonly reports: string[]) {
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


  static getInstance(){
    if(AccountingDepartment.Instance){
      return this.Instance
    }
    this.Instance = new AccountingDepartment('A6', ['HR Reports', 'IT Reports'])
    return this.Instance
  }

  describe() {
    console.log('Accounting Department with Id: ' + this.id);
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

it.describe();

//const Accounting = new AccountingDepartment('A6', ['HR Reports', 'IT Reports'])
const Accounting =  AccountingDepartment.getInstance()
const Accounting2 =  AccountingDepartment.getInstance()

console.log(Accounting, Accounting2 );



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
//Department.financialYear = 4335
console.log(Department.createEmployee('kanishka'), Department.financialYear);


Accounting.printEmployee();
Accounting.printReports()
console.log(Accounting);
Accounting.describe();





