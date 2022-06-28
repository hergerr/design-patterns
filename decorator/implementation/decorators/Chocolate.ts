import { IngredientDecorator } from "../../core/IngredientDecorator";
import { Beverage } from "../../core/Beverage";

export class Chocolate extends IngredientDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Chocolate";
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
