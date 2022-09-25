class Department {
  public name: string;
  private employees: string[] = []

  constructor(name: string) {
    this.name = name
  }

  describe(this: Department) {
    console.log('department is ' + this.name);

  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployee() {
    console.log(this.employees.length, this.employees);

  }


}


let department = new Department('Science');
department.addEmployee('Kanishka');
department.addEmployee('Atomlessmind');

department.printEmployee()

