import { Duck } from "./core/Duck";
import { Turkey } from "./core/Turkey";
import { TurkeyAdapter } from "./core/TurkeyAdapter";
import { WildDuck } from "./implementation/WildDuck";
import { WildTurkey } from "./implementation/WildTurkey";

const testDuck = (duck: Duck) => {
  duck.fly();
  duck.quack();
};

const wildDuck: Duck = new WildDuck();
const wildTurkey: Turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(wildTurkey);

console.log("Turkey: ");
wildTurkey.fly();
wildTurkey.gurgle();

console.log("Duck: ");
testDuck(wildDuck);

console.log("TurkeyAdapter");
turkeyAdapter.fly();
turkeyAdapter.quack();
