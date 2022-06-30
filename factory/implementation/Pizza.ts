export abstract class Pizza {
  protected name: string;
  protected cake: string;
  protected sauce: string;
  protected additions = new Array<string>();

  prepare(): void {
    console.log("Preparing: " + this.name);
    console.log("Kneading the dough...");
    console.log("Adding souce...");
    console.log("Additions: ");
    for (let i = 0; i < this.additions.length; i++) {
      console.log(" ", this.additions[i]);
    }
  }

  bake(): void {
    console.log("Baking: 25 minutes in 350 degrees");
  }

  slice(): void {
    console.log("Slicing pizza into 8 parts");
  }

  package(): void {
    console.log("Packaging pizza into official box of Pizzeria network");
  }

  getName(): string {
    return this.name;
  }
}
