import { CoffeinBeverage } from "./CoffeinBeverage";

export class Coffee extends CoffeinBeverage {
  brew(): void {
    console.log("Dripping coffee through filter");
  }
  addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}
