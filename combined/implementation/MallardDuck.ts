import { Quackable } from "../core/Quackable";

export class MallardDuck implements Quackable {
  quack(): void {
    console.log("Quack");
  }

  toString(): string {
    return "Mallard Duck";
  }
}
