import { FlyingInterface } from "../core/FlyingInterface";

export class RocketPropulsionFlying implements FlyingInterface {
  fly = () => {
    console.log("3 2 1 and lift off");
  };
}
