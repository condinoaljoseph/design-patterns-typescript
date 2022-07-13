/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

interface Dairy {
    getCost(): number;
}

class Vanilla implements Dairy {
  getCost() {
    return 20;
  }
}

abstract class WithAddons implements Dairy {
  private dairy: Dairy;

  constructor(dairy: Dairy) {
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
