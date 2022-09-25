class Department {

  private employees: string[] = []

  constructor(private readonly id:string,public name: string) {}

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

class ITDepartment extends Department{
  constructor(id:string,public readonly admin:string[]){
    super(id,'ITdepartment');
  }
};

class AccountingDepartment extends Department{
  constructor(id:string,public readonly reports:string[]){
    super(id,'Accounting');
  }
  addReport(report:string){
   this.reports.push(report);
  }
  printReports(){
  console.log(this.reports);
  
  }

};

 const it = new ITDepartment('D3',['kansihka'])
 console.log(it);

 const Accounting = new AccountingDepartment('A6',['HR Reports','IT Reports'])
 Accounting.addEmployee('Atomlesmmind');
 Accounting.addReport('Accountion Reports');
 Accounting.printEmployee();
 Accounting.printReports()
 console.log(Accounting);



 
