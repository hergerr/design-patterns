import { Quackable } from "./Quackable";

export class QuackCounter implements Quackable {
  private static quackCounter = 0;

  constructor(private quackable: Quackable) {}

  quack(): void {
    this.quackable.quack();
    QuackCounter.quackCounter++;
  }

  static getQuacks(): number {
    return QuackCounter.quackCounter;
  }

  toString(): string {
    return this.quackable.toString();
  }
}
