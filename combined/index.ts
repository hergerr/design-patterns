import { AbstractDuckFactory } from "./core/AbstractDuckFactory";
import { Flock } from "./core/Flock";
import { GooseAdapter } from "./core/GooseAdapter";
import { Quackable } from "./core/Quackable";
import { QuackCounter } from "./core/QuackCounter";
import { DuckFactory } from "./implementation/DuckFactory";
import { Goose } from "./implementation/Goose";

const simulate = (quackable: Quackable) => {
  quackable.quack();
};

const factory: AbstractDuckFactory = new DuckFactory();

const mallardDuck: Quackable = factory.createMallardDuck();
const callDuck: Quackable = factory.createCallDuck();
const decoyDuck: Quackable = factory.createDecoyDuck();
const goose: Quackable = new GooseAdapter(new Goose());

const flockOfDucks: Flock = new Flock();
flockOfDucks.add(mallardDuck);
flockOfDucks.add(callDuck);
flockOfDucks.add(decoyDuck);

const mallardOne = factory.createMallardDuck();
const mallardTwo = factory.createMallardDuck();
const mallardThree = factory.createMallardDuck();

const flockOfMallars: Flock = new Flock();
flockOfMallars.add(mallardOne);
flockOfMallars.add(mallardTwo);
flockOfMallars.add(mallardThree);

flockOfDucks.add(flockOfMallars);

simulate(flockOfDucks);

console.log(QuackCounter.getQuacks());
