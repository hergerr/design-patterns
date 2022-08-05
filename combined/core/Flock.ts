import { Quackable } from "./Quackable";

export class Flock implements Quackable {
  quackers: Array<Quackable> = new Array<Quackable>();

  quack(): void {
    for (let i = 0; i < this.quackers.length; i++) {
      this.quackers[i].quack();
    }
  }

  add(quackable: Quackable): void {
    this.quackers.push(quackable);
  }

  toString(): string {
    return "Flock of quackers";
  }
}
