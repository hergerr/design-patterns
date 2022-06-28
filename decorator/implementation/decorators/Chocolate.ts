import { IngredientDecorator } from "../../core/IngredientDecorator";
import { Beverage } from "../../core/Beverage";
import { Sizes } from "../../core/Size";

export class Chocolate extends IngredientDecorator {
  constructor(private beverage: Beverage) {
    super();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Chocolate";
  }

  cost(): number {
    if (this.size === Sizes.SMALL) {
      return this.beverage.cost() + 0.1;
    } else if (this.size === Sizes.MEDIUM) {
      return this.beverage.cost() + 0.15;
    } else if (this.size === Sizes.LARGE) {
      return this.beverage.cost() + 0.2;
    }
    // when no size
    return this.beverage.cost() + 0.2;
  }
}
