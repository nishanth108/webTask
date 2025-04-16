let emp1 = { id: 12, name: "John", age: 25, salary: 50000 };

let emp2 = new Object();
emp2.id = 13;
emp2.name = "Nishanth";
emp2.age = 21;
emp2.salary = 60000;

function emp3(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}
let emp3Obj = new emp3(14, "Nishanth", 21, 60000);
