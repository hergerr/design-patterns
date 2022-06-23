import { CurrentConditionsView } from "./implementation/CurrentContidionsView";
import { ForecastView } from "./implementation/ForecastView";
import { StatisticsView } from "./implementation/StatisticsView";
import { WeatherData } from "./implementation/WeatherData";

const weatherData = new WeatherData();
const currentContidions = new CurrentConditionsView(weatherData);
const statistics = new StatisticsView(weatherData);
const forecast = new ForecastView(weatherData);

weatherData.setParams(33, 65, 1013);
weatherData.setParams(23, 70, 997);
weatherData.setParams(21, 90, 997);
