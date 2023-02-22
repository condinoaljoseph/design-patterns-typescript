type FormatName = (name: string) => string;

export interface IStrategy {
  formatName: FormatName;
}

export class UppercaseStrategy implements IStrategy {
  formatName: FormatName = (name: string) => {
    return name.toUpperCase();
  };
}

export class LowercaseStrategy implements IStrategy {
  formatName: FormatName = (name: string) => {
    return name.toLowerCase();
  };
}

export class ReverseStrategy implements IStrategy {
  formatName: FormatName = (name: string) => {
    return name.split('').reverse().join('');
  };
}

export class Strategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    if (!strategy) {
      throw new Error('Strategy argument cannot be null or undefined');
    }
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy): void {
    if (!strategy) {
      throw new Error('Strategy argument cannot be null or undefined');
    }
    this.strategy = strategy;
  }

  public executeStrategy(user: string): string {
    return this.strategy.formatName(user);
  }
}

const strategy = new Strategy(new UppercaseStrategy());

console.log('Strategy is set to uppercase formatting');
console.log(strategy.executeStrategy('Elpmid'));

strategy.setStrategy(new LowercaseStrategy());
console.log('Strategy is set to lowercase formatting');
console.log(strategy.executeStrategy('Dimple'));

strategy.setStrategy(new ReverseStrategy());
console.log('Strategy is set to reverse string');
console.log(strategy.executeStrategy('Vindecode'));