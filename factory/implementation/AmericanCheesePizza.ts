import { Pizza } from "./Pizza";

export class AmericanCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "American cheese pizza";
    this.cake = "Extra thick cake";
    this.sauce = "Plumb tomato souce";

    this.additions.push("Mozarella cheese");
  }

  slice(): void {
    console.log("Slicing pizza to square parts");
  }
}
