import { Observable } from "../core/Observable";
import { Observer } from "../core/Observer";

export class WeatherData implements Observable {
  private observers: Array<Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor(){
    this.observers = new Array<Observer>
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(item => item !== observer)
  }
  
  notifyObservers(): void {
    for(let i = 0; i < this.observers.length; i++ ){
      const o: Observer = this.observers[i]
      o.update(this.temperature, this.humidity, this.pressure)
    }
  }

  changeOfParams(): void {
    this.notifyObservers()
  }

  // maybe in future real world data from web
  setParams(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.changeOfParams()
  }
}
