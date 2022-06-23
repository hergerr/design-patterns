import { DisplayElement } from "../core/DisplayElement";
import { Observable } from "../core/Observable";
import { Observer } from "../core/Observer";

export class StatisticsView implements Observer, DisplayElement {
  private minTemp: number = 200;
  private maxTemp: number = 0;
  private tempSum: number = 0;
  private numReadings: number = 0;
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.tempSum += temperature;
    this.numReadings++;

    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    this.display();
  }

  display(): void {
    console.log(
      "Avg/Max/Min temperature = " +
        this.tempSum / this.numReadings +
        "/" +
        this.maxTemp +
        "/" +
        this.minTemp
    );
  }
}
