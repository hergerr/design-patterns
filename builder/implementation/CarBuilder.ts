import { Builder } from "../core/Builder";
import { EngineTypes } from "../core/EngineTypes";

export class CarBuilder implements Builder {
  static CORE = "Produced car with ";
  private car: string;

  constructor() {
    this.car = CarBuilder.CORE;
  }

  reset(): void {
    this.car = CarBuilder.CORE;
  }
  setSeats(num: number) {
    this.car += `${num} seats, `;
  }
  setEngine(engine: EngineTypes) {
    this.car += `${engine}, `;
  }
  setGPS(): void {
    this.car += "and genuine GPS.";
  }

  // product are not supposed to return same type
  // that is why getProduct is not present in Builder interface
  getProduct(): string {
    const product = this.car;
    this.reset();
    return product;
  }
}
