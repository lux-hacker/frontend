// Adapter
class DataProvider {
    request() {
        return "This is important text"
    }
}

class UpperCaseAdapter {
    provider: DataProvider;
    constructor(provider: DataProvider) {
        this.provider = provider;
    }
    request() {
        return this.provider.request().toUpperCase();
    }
}

const adapter = new UpperCaseAdapter(new DataProvider())
console.log(adapter.request())

// Strategy

interface Strategy {
    todo(data: number[]): number[];
}

class SortingStrategy implements Strategy {
    todo(data: number[]): number[] {
        return data.sort();
    }
}

class ReversingStrategy implements Strategy{
    todo(data: number[]): number[] {
        return data.reverse();
    }
}

class Context {
    private _strategy: Strategy;
    set strategy(strategy: Strategy) {
        this._strategy = strategy;
    }
    constructor(strategy: Strategy) {
        this._strategy = strategy;
    }

    todo() {
        const res = this._strategy.todo([5,1,7,1,0,9,-1,-5,5.7,0.8]);
        console.log(...res);
    }
}

const context = new Context(new SortingStrategy());
context.todo();
context.strategy = new ReversingStrategy();
context.todo()

// Observe
interface Observer {
    update(subject: Subject): void;
}

class Subject {
    private observers: Observer[] = [];
    state: number;

    constructor() {
        this.observers = []
        this.state = 0;
    }

    attach(observer: Observer) {
        this.observers.push(observer);
    }

    detach(observer: Observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this));
    }

    todo() {
        this.state++;
        this.notify();
    }
}

class ObserverA implements Observer {
    update(subject: Subject) {
        if (subject.state === 1) {
            console.log("Observer A");
        }
    }
}

class ObserverB implements Observer {
    update(subject: Subject) {
        if (subject.state === 2) {
            console.log("Observer B");
        }
    }
}

const sub = new Subject();
const obs1 = new ObserverA();
const obs2 = new ObserverB();
sub.attach(obs1);
sub.attach(obs2);
sub.todo();