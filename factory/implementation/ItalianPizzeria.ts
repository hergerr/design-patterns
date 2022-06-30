import { ItalianCheesePizza } from "./ItalianCheesePizza";
import { Pizza } from "./Pizza";
import { Pizzeria } from "./Pizzeria";

export class ItalianPizzeria extends Pizzeria {
  createPizza(type: string): Pizza | null {
    if (type === "cheese") {
      return new ItalianCheesePizza();
    } else return null;
  }
}
