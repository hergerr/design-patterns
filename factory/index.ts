import { AmericanPizzeria } from "./implementation/AmericanPizzeria";
import { ItalianPizzeria } from "./implementation/ItalianPizzeria";
import { Pizza } from "./implementation/Pizza";
import { Pizzeria } from "./implementation/Pizzeria";

const italian: Pizzeria = new ItalianPizzeria();
const american: Pizzeria = new AmericanPizzeria();

let pizza: Pizza | null = italian.orderPizza("cheese");
if (pizza === null) process.exit(0);
console.log("Erik ordered: " + pizza.getName());

pizza = american.orderPizza("cheese");
if (pizza === null) process.exit(0);
console.log("Jack ordered: " + pizza.getName());
