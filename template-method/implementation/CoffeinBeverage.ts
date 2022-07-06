export abstract class CoffeinBeverage {
  // final in Java
  readonly prepareRecipe = async (): Promise<void> => {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) this.addCondiments();
  };

  abstract brew(): void;
  abstract addCondiments(): void;

  boilWater(): void {
    console.log("Boil water");
  }

  pourInCup(): void {
    console.log("Pouring into cup");
  }

  // hook - optional, overridable algorithm part
  async customerWantsCondiments(): Promise<boolean> {
    return new Promise((resolve) => resolve(true));
  }
}
