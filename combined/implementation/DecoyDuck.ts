import { Quackable } from "../core/Quackable";

export class DecoyDuck implements Quackable {
  quack(): void {
    console.log("Silence");
  }

  toString(): string {
    return "Decoy Duck";
  }
}
