import { Beverage } from "./Beverage";
import { Sizes } from "./Size";

export abstract class IngredientDecorator extends Beverage {
  abstract getDescription(): string;
  getSize(): Sizes {
    return this.getSize();
  }
}
