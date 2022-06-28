import { Beverage } from "../../core/Beverage";

export class CoffeinFree extends Beverage {
  constructor() {
    super();
    this.description = "Coffein free caffee";
  }
  cost(): number {
    return 1.05;
  }
}
