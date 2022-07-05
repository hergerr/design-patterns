import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {}

  quack(): void {
    this.turkey.gurgle();
  }
  fly(): void {
    this.turkey.fly();
  }
}
