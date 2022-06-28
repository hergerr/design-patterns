import { Beverage } from "./Beverage";

export abstract class IngredientDecorator extends Beverage {
  abstract getDescription(): string;
}
