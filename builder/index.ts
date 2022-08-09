import { Director } from "./core/Director";
import { CarBuilder } from "./implementation/CarBuilder";
import { ManualBuilder } from "./implementation/ManualBuilder";

const carBuilder: CarBuilder = new CarBuilder();
const director: Director = new Director(carBuilder);

director.constructSportsCar();
const sportsCar = carBuilder.getProduct();
console.log(sportsCar);

const manualBuilder: ManualBuilder = new ManualBuilder();
director.setBuilder(manualBuilder);
director.constructSportsCar();
const sportsCarManual = manualBuilder.getProduct();
console.log(sportsCarManual);
