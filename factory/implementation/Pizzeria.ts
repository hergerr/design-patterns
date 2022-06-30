import { Pizza } from "./Pizza";

export abstract class Pizzeria {
  abstract createPizza(type: string): Pizza | null;

  orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null;
    pizza = this.createPizza(type);

    if (pizza === null) {
      return null;
    }

    pizza.prepare();
    pizza.bake();
    pizza.slice();
    pizza.package();

    return pizza;
  }
}
