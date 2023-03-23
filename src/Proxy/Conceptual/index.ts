interface IBankAccount {
    withdraw: (amount: number) => void;
}

class BankAccount implements IBankAccount {
    public withdraw(amount: number) {
        console.log('withdrawing amount ', amount);
    }
}

class BankAccountProxy implements IBankAccount {
    private service: IBankAccount;
    private isAuthenticated: boolean;

    constructor(service: IBankAccount, isAuthenticated: boolean) {
        this.service = service
        this.isAuthenticated = isAuthenticated
    }

    public withdraw(amount: number) {
        if (!this.isAuthenticated) {
            throw new Error('User is not authenticated')
        }
        this.service.withdraw(amount);
    }
}

const bankAccount = new BankAccount();
const bankAccountProxy = new BankAccountProxy(bankAccount, true);

console.log(bankAccount.withdraw(5))
console.log(bankAccountProxy.withdraw(10))