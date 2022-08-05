import { GooseAdapter } from "./core/GooseAdapter";
import { Quackable } from "./core/Quackable";
import { QuackCounter } from "./core/QuackCounter";
import { CallDuck } from "./implementation/CallDuck";
import { DecoyDuck } from "./implementation/DecoyDuck";
import { Goose } from "./implementation/Goose";
import { MallardDuck } from "./implementation/MallardDuck";

const simulate = (quackable: Quackable) => {
  quackable.quack();
};

const mallardDuck: Quackable = new QuackCounter(new MallardDuck());
const callDuck: Quackable = new QuackCounter(new CallDuck());
const decoyDuck: Quackable = new QuackCounter(new DecoyDuck());
const goose: Quackable = new GooseAdapter(new Goose());

simulate(mallardDuck);
simulate(callDuck);
simulate(decoyDuck);
simulate(goose);

console.log(QuackCounter.getQuacks());
