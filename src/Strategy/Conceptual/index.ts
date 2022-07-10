/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
interface IStrategy {
  formatName: (name: string) => string;
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

class Strategy {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(user: string) {
    return this.strategy.formatName(user);
  }
}

const strategyUppercase = new UppercaseStrategy();
const strategyLowercase = new LowercaseStrategy();
const strategy1 = new Strategy(strategyUppercase);
const strategy2 = new Strategy(strategyLowercase);

console.log(strategy1.setStrategy('Dimple'));
console.log(strategy2.setStrategy('Elpmid'));
