import { Duck } from "../core/Duck";
import { Quack } from "../behaviors/Quack";
import { NoFlying } from "../behaviors/NoFlying";

export class ModelDuck extends Duck {
  constructor() {
    super(new NoFlying(), new Quack());
  }

  display() {
    console.log("I am model duck");
  }
}
