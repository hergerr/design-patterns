import { QuackingInterface } from "../core/QuackingInterface";

export class Squeek implements QuackingInterface {
  quack = () => {
    console.log("SQUEEK!");
  };
}
