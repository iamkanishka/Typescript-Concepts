class Department {

  private employees: string[] = []

  constructor(private id:string,public name: string) {}

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


let department = new Department('D1','Science');
department.describe()
department.addEmployee('Kanishka');
department.addEmployee('Atomlessmind');

department.printEmployee()

