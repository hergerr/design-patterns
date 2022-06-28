import { Beverage } from "../../core/Beverage";

export class StarCafeSpecial extends Beverage {
  constructor() {
    super();
    this.description = "Star Cafe special caffee";
  }
  cost(): number {
    return 0.89;
  }
}
