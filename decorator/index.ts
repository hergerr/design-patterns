import { Beverage } from "./core/Beverage";
import { DarkRoast } from "./implementation/base/DarkRoast";
import { Espresso } from "./implementation/base/Espresso";
import { StarCafeSpecial } from "./implementation/base/StarCafeSpecial";
import { Chocolate } from "./implementation/decorators/Chocolate";
import { SoyMilk } from "./implementation/decorators/SoyMilk";
import { WhippedCream } from "./implementation/decorators/WhippedCream";

const bev1 = new Espresso();
console.log(bev1.getDescription() + ": " + bev1.cost());

let bev2: Beverage = new DarkRoast();
bev2 = new Chocolate(bev2);
bev2 = new Chocolate(bev2);
bev2 = new WhippedCream(bev2);
console.log(bev2.getDescription() + ": " + bev2.cost());

let bev3 = new StarCafeSpecial();
bev3 = new SoyMilk(bev3);
bev3 = new Chocolate(bev3);
bev3 = new WhippedCream(bev3);
console.log(bev3.getDescription() + ": " + bev3.cost());
