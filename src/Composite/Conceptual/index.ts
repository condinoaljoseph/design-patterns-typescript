abstract class Employee {
    constructor(public name: string, public salary: number) {}

    getTotalSalary(): number {
        throw new Error('Method not implemented.');
    }
}

class Staff extends Employee {
    getTotalSalary(): number {
       return this.salary; 
    }    
}

class Manager extends Employee {
    protected employees: Employee[] = [];

    add(employee: Employee) {
        this.employees.push(employee);
    }

    remove(employee: Employee) {
        const employeeIndex = this.employees.indexOf(employee);
        this.employees.splice(employeeIndex, 1);
    }

    getSubordinates(): Employee[] {
        return this.employees;
    }

    getTotalSalary(): number {
       const employeeSalaries = this.employees.reduce((acc, cur) => {
            return acc + cur.getTotalSalary(); 
       }, 0) 

       return employeeSalaries + this.salary;
    }
}

const staff = new Staff('AJ', 40000);
const manager = new Manager('Dimpol', 80000);

console.log(staff.getTotalSalary());
console.log(manager.getTotalSalary());

manager.add(staff);

console.log(manager.getTotalSalary());