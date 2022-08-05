import { Quackable } from "../core/Quackable";

export class CallDuck implements Quackable {
  quack(): void {
    console.log("Kwak");
  }

  toString(): string {
    return "Decoy Duck";
  }
}
