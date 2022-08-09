import { EngineTypes } from "./EngineTypes";

export interface Builder {
  reset(): void;
  setSeats(num: number);
  setEngine(engine: EngineTypes);
  setGPS(): void;
}
