import { Quackable } from "./Quackable";
import { Goose } from "../implementation/Goose";

export class GooseAdapter implements Quackable {
  constructor(private goose: Goose) {}

  quack(): void {
    this.goose.honk();
  }

  toString(): string {
    return "Goose pretending to be a duck";
  }
}
