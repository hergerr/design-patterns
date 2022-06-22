import { WildDuck } from "./compositions/WildDuck";
import { ModelDuck } from "./compositions/ModelDuck";
import { RocketPropulsionFlying } from "./behaviors/RocketPropulsionFlying";

const duck = new WildDuck();
duck.display();
duck.executeFlying();
duck.executeQuacking();
duck.swim();

console.log("-------------");

const modelDuck = new ModelDuck();
modelDuck.display();
modelDuck.executeFlying();
modelDuck.executeQuacking();
modelDuck.swim();
modelDuck.setFlyingInterface(new RocketPropulsionFlying());
modelDuck.executeFlying();
