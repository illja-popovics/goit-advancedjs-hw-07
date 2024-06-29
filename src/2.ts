class Employee {
  public name: string;            // доступне всім
  private department: string;     // доступне лише всередині класу Employee
  protected salary: number;       // доступне всередині класу Employee та його підкласів

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// Приклад використання
const employee = new Employee("John Doe", "Engineering", 50000);
console.log(employee.getEmployeeDetails()); // Name: John Doe, Department: Engineering, Salary: 50000

const manager = new Manager("Jane Smith", "Engineering", 50000);
console.log(manager.getEmployeeDetails()); // Name: Jane Smith, Department: Engineering, Salary: 60000

export {};
