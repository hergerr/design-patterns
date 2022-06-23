import { DisplayElement } from "../core/DisplayElement";
import { Observable } from "../core/Observable";
import { Observer } from "../core/Observer";

export class CurrentConditionsView implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  // in case of need to remove subscription
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current weather conditions: temperature ${this.temperature}, humidity: ${this.humidity}`
    );
  }
}
