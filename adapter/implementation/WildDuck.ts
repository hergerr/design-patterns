import { Duck } from "../core/Duck";

export class WildDuck implements Duck {
  quack(): void {
    console.log("Quack quack!");
  }
  fly(): void {
    console.log("OMG, I am flying");
  }
}
