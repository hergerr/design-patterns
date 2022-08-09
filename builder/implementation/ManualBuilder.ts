import { Builder } from "../core/Builder";
import { EngineTypes } from "../core/EngineTypes";

export class ManualBuilder implements Builder {
  static CORE = "Printed manual of a car with ";
  private manual: string;

  constructor() {
    this.manual = ManualBuilder.CORE;
  }

  reset(): void {
    this.manual = ManualBuilder.CORE;
  }
  setSeats(num: number) {
    this.manual += `${num} seats (manual p. 23), `;
  }
  setEngine(engine: EngineTypes) {
    this.manual += `${engine} (manual p. 33), `;
  }
  setGPS(): void {
    this.manual += "and GPS (manual p. 45).";
  }

  getProduct(): string {
    const product = this.manual;
    this.reset();
    return product;
  }
}
