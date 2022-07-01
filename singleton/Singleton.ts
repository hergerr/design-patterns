export class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (this.instance) {
      console.log("old");
      return this.instance;
    } else {
      console.log("new");
      this.instance = new this();
      return this.instance;
    }
  }
}
