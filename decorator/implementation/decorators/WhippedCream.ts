import { Beverage } from "../../core/Beverage";
import { IngredientDecorator } from "../../core/IngredientDecorator";

export class WhippedCream extends IngredientDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whipped cream";
  }
  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
