import { QuackingInterface } from "../core/QuackingInterface";

export class NoQuack implements QuackingInterface {
  quack = () => {
    console.log("<<< silence >>>");
  };
}
