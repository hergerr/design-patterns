import { FlyingInterface } from "../core/FlyingInterface";

export class NoFlying implements FlyingInterface {
  fly = () => {
    console.log("I am not flying");
  };
}
