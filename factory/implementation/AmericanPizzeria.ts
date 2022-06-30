import { AmericanCheesePizza } from "./AmericanCheesePizza";
import { Pizza } from "./Pizza";
import { Pizzeria } from "./Pizzeria";

export class AmericanPizzeria extends Pizzeria {
  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return new AmericanCheesePizza();
    } else return null;
  }
}
