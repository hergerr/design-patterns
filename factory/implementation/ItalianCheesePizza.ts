import { Pizza } from "./Pizza";

export class ItalianCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "Italian cheese pizza with Marinara sauce";
    this.cake = "Thin, brittle cake";
    this.sauce = "Marinara sauce";

    this.additions.push("Reggiano cheese");
  }
}
