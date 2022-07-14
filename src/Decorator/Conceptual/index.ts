interface IDairy {
    getCost(): number;
}

class Vanilla implements IDairy {
  getCost() {
    return 20;
  }
}

abstract class WithAddons implements IDairy {
  private dairy: IDairy;

  constructor(dairy: IDairy) {
    this.dairy = dairy;
  }

  getCost() {
    return this.dairy.getCost();
  }
}

class WithSprinkle extends WithAddons {
  getCost() {
    return super.getCost() + 5;
  }
}

class WithCoatedChocolate extends WithAddons {
  getCost(): number {
    return super.getCost() + 10;
  }
}

const iceCream = new Vanilla();
const withCoatedChocolate = new WithCoatedChocolate(iceCream);
const withSprinkle = new WithSprinkle(withCoatedChocolate);

console.log(`total cost of my ice cream is ${withSprinkle.getCost()}`);
