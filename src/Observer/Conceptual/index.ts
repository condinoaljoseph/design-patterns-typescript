interface IPublisher {
  register(subscriber: ISubscriber): void;
  unregister(subscriber: ISubscriber): void;
  notify(): void;
  getProduct(): string;
  setProduct(product: string): void;
}

class Publisher implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private product: string;

  constructor(product: string) {
    this.product = product;
  }

  register(subscriber: ISubscriber) {
    if (this.subscribers.includes(subscriber)) {
      console.log('Publisher: Subscriber has already been added');
      return;
    }
    this.subscribers.push(subscriber);
    console.log('Registered new subscriber');
  }

  unregister(subscriber: ISubscriber) {
    const index = this.subscribers.indexOf(subscriber);
    if (index === -1) {
      throw new Error('Publisher: Subscriber does not exist');
    }
    this.subscribers.splice(index, 1);
    console.log('Unregistered subscriber');
  }

  notify() {
    if (this.subscribers.length === 0) {
      console.log('Publisher: No subscribers to notify');
      return;
    }
    console.log('Notifying subscribers');
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this);
    });
  }

  getProduct() {
    return this.product;
  }

  setProduct(product: string) {
    this.product = product;
    console.log(`Product updated to ${product}`);
    this.notify();
  }
}

interface ISubscriber {
  update(publisher: IPublisher): void;
}

class SubscriberA implements ISubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(publisher: IPublisher) {
    console.log(`${this.name} reacted to new ${publisher.getProduct()}`);
  }
}

class SubscriberB implements ISubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(publisher: IPublisher) {
    console.log(`${this.name} reacted to new ${publisher.getProduct()}`);
  }
}

const publisher = new Publisher('iphone 14');

const subscriberA = new SubscriberA('A');
const subscriberB = new SubscriberB('B');

publisher.register(subscriberA);
publisher.register(subscriberB);
publisher.register(subscriberA);
publisher.notify();
publisher.unregister(subscriberA);
publisher.notify();
publisher.setProduct('iphone 15');