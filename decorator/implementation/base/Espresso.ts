import { Beverage } from "../../core/Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso coffee";
  }

  cost(): number {
    return 1.99;
  }
}
