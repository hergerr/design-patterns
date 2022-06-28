import { Beverage } from "../../core/Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast caffee";
  }
  cost(): number {
    return 0.99;
  }
}
