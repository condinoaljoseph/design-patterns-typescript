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

const boss = new Manager('Elpmid', 100000);
const staff = new Staff('AJ', 40000);
const manager1 = new Manager('Dimpol', 80000);
const manager2 = new Manager('Impot', 50000);

console.log(staff.getTotalSalary());
console.log(manager1.getTotalSalary());

manager1.add(staff);

console.log(manager1.getTotalSalary());
console.log(boss.getTotalSalary());

boss.add(manager1);
boss.add(manager2);

console.log(JSON.stringify(boss.getSubordinates()));
console.log(boss.getTotalSalary())