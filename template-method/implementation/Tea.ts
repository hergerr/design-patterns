import { CoffeinBeverage } from "./CoffeinBeverage";

export class Tea extends CoffeinBeverage {
  brew(): void {
    console.log("Steeping the tea");
  }
  addCondiments(): void {
    console.log("Adding lemon");
  }
  async customerWantsCondiments(): Promise<boolean> {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await new Promise((resolve) => {
      readline.question(
        "Do you want to add lemon to your tea? [y/n] ",
        (ans: string) => resolve(ans)
      );
    });

    readline.close();

    if (answer === "y") {
      return true;
    } else return false;
  }
}
