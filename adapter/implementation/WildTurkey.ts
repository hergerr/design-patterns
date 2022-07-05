import { Turkey } from "../core/Turkey";

export class WildTurkey implements Turkey {
  gurgle(): void {
    console.log("Gulgulgul!");
  }
  fly(): void {
    console.log("I am flying, but only on short distances");
  }
}
