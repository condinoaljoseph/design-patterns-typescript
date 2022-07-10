interface IStrategy {
    formatName: (name: string) => string;
}

const UppercaseStrategy: IStrategy = {
  formatName(name) {
    return name.toUpperCase();
  },
};

const LowercaseStrategy: IStrategy = {
  formatName(name) {
    return name.toLowerCase();
  },
};

const Strategy = (strategy: IStrategy) => ({
  applyStrategy(name: string) {
    return strategy.formatName(name);
  },
});

const strategyUppercase = UppercaseStrategy;
const strategyLowercase = LowercaseStrategy;
const strategy1 = Strategy(strategyUppercase);
const strategy2 = Strategy(strategyLowercase);

console.log(strategy1.applyStrategy('Dimple'));
console.log(strategy2.applyStrategy('Elpmid'));
