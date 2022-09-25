interface Admmin{
  name:string;
  role:string[]
}

interface Employee{
  name:string;
  startDate:Date
}

interface superEmployee extends Admmin, Employee{}

let emp :superEmployee={
  name:'Kanishka',
  role:['admin'],
  startDate: new Date()
}

type combinable = number | string;
type numeric = number | boolean

type universal = combinable & numeric;

var x :universal =10