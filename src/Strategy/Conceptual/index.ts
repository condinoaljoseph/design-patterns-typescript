/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
interface IStrategy {
  formatName(name: string): string;
}

class UppercaseStrategy implements IStrategy {
  formatName(name: string): string {
    return name.toUpperCase();
  }
}

class LowercaseStrategy implements IStrategy {
  formatName(name: string): string {
    return name.toLowerCase();
  }
}

class ReverseStrategy implements IStrategy {
  formatName(name: string): string {
    return name.split('').reverse().join('');
  }
}

class Strategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public executeStrategy(user: string) {
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
