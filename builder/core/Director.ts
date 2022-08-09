import { Builder } from "./Builder";
import { EngineTypes } from "./EngineTypes";

// optional, for producing objects
// in given sequence
export class Director {
  constructor(private builder: Builder) {}

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  constructSportsCar(): void {
    this.builder.setSeats(2);
    this.builder.setEngine(EngineTypes.petrol);
    this.builder.setGPS();
  }

  constructSuv(): void {
    this.builder.setSeats(5);
    this.builder.setEngine(EngineTypes.diesel);
    this.builder.setGPS();
  }
}
