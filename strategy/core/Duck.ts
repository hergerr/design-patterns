import { FlyingInterface } from "./FlyingInterface";
import { QuackingInterface } from "./QuackingInterface";

export abstract class Duck {
  constructor(
    private flyingInteface: FlyingInterface,
    private quackingInterface: QuackingInterface
  ) {}

  abstract display(): void;

  executeQuacking = () => {
    this.quackingInterface.quack();
  };

  executeFlying = () => {
    this.flyingInteface.fly();
  };
}
