import { QuackingInterface } from "../core/QuackingInterface";

export class Quack implements QuackingInterface {
  quack = () => {
    console.log("Standart quack");
  };
}
