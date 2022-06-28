export abstract class Beverage {
  protected description: string = "Beverage unknown";

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}
