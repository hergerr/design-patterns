import { Quackable } from "./Quackable";

export abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createCallDuck(): Quackable;
  abstract createDecoyDuck(): Quackable;
}
