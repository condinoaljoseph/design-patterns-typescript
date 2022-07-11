/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
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
    this.subscribers.push(subscriber);
    console.log('registered new subscriber');
  }

  unregister(subscriber: ISubscriber) {
    this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
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
  update(publisher: IPublisher) {
    console.log(`A reacted to new ${publisher.getProduct()}`);
  }
}

class SubscriberB implements ISubscriber {
  update(publisher: IPublisher) {
    console.log(`B reacted to new ${publisher.getProduct()}`);
  }
}

const publisher = new Publisher('iphone 13');

const subscriberA = new SubscriberA();
const subscriberB = new SubscriberB();

publisher.register(subscriberA);
publisher.register(subscriberB);

publisher.notify();

publisher.unregister(subscriberA);

publisher.notify();
