class Department{
  name:string;

  constructor(name:string){
    this.name=name
  }

  describe(this:Department){
    console.log('department is ' + this.name);
    
  }
}


let department = new Department('Science')
department.describe();


let departmentCopy = {name:'kanishka',describe:department.describe}
console.log(departmentCopy);

departmentCopy.describe.bind(department)()
