// target interface contains method the client expects
interface ITarget {
    request(): string
}

// adapter implements the interface ITarget
class Adapter implements ITarget {
    private adaptee: IAdaptee;

    constructor(adaptee: IAdaptee) {
        this.adaptee = adaptee;
    }

    request() {
        return this.adaptee.specificRequest().split('').reverse().join('');
    }
}

interface IAdaptee {
    specificRequest(): string
}

class Adaptee {
    specificRequest() {
        return 'tseuqer cificeps';
    }
}

// client
const clientCode = (target: ITarget) => {
    return target.request();
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adaptee.specificRequest())
console.log(clientCode(adapter));


