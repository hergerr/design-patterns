import { Sizes } from "./Size";

export abstract class Beverage {
  protected description: string = "Beverage unknown";
  protected size: Sizes;

  getDescription(): string {
    return this.description;
  }

  setSize(size: Sizes) {
    this.size = size;
  }

  getSize(): Sizes {
    return this.size;
  }

  abstract cost(): number;
}
