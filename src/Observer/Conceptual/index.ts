interface IPublisher {
    register(subscriber: ISubscriber): void
    unregister(subscriber: ISubscriber): void
    notify(): void
    getProduct(): string
}

class Publisher implements IPublisher {
  private subscribers: ISubscriber[] = [];

  private product: string;

  constructor(product: string) {
    this.product = product;
  }

  register(subscriber: ISubscriber) {
    const hasExist = this.subscribers.includes(subscriber);
    if (hasExist) {
      console.log('Publisher: Subscriber has already been added');
      return;
    }
    this.subscribers.push(subscriber);
    console.log('registered new subscriber');
  }

  unregister(subscriber: ISubscriber) {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      console.log('Publisher: Subscriber does not exist');
    }
    this.subscribers.splice(subscriberIndex, 1);
    console.log('unregistered subscriber');
  }

  notify() {
    console.log('notifying subscribers');
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this);
    });
  }

  getProduct() {
    return this.product;
  }
}

interface ISubscriber {
    update(publisher: IPublisher): void
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
