import { Duck } from "../core/Duck";
import { Quack } from "../behaviors/Quack";
import { WingFlying } from "../behaviors/WingFlying";

export class WildDuck extends Duck {
  constructor() {
    super(new WingFlying(), new Quack());
  }

  display() {
    console.log("I am genuine wild duck");
  }
}
