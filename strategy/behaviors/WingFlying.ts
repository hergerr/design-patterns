import { FlyingInterface } from "../core/FlyingInterface";

export class WingFlying implements FlyingInterface {
  fly() {
    console.log("Standart way of flying");
  }
}
