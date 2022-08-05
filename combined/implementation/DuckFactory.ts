import { AbstractDuckFactory } from "../core/AbstractDuckFactory";
import { Quackable } from "../core/Quackable";
import { QuackCounter } from "../core/QuackCounter";
import { CallDuck } from "./CallDuck";
import { DecoyDuck } from "./DecoyDuck";
import { MallardDuck } from "./MallardDuck";

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }
  createCallDuck(): Quackable {
    return new QuackCounter(new CallDuck());
  }
  createDecoyDuck(): Quackable {
    return new QuackCounter(new DecoyDuck());
  }
}
