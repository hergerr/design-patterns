import { DisplayElement } from "../core/DisplayElement";
import { Observable } from "../core/Observable";
import { Observer } from "../core/Observer";

export class ForecastView implements Observer, DisplayElement {
  private currentPressure: number = 30;
  private lastPressure: number;
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  display(): void {
    console.log("Forecast: ");
    if (this.currentPressure > this.lastPressure) {
      console.log("Improving weather on the way!");
    } else if (this.currentPressure == this.lastPressure) {
      console.log("More of the same");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Watch out for cooler, rainy weather");
    }
  }
}
