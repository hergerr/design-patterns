import { Beverage } from "../../core/Beverage";
import { IngredientDecorator } from "../../core/IngredientDecorator";

export class SoyMilk extends IngredientDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy milk";
  }
  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
