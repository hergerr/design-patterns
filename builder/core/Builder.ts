import { EngineTypes } from "./EngineTypes";

export interface Builder {
  reset(): void;
  setSeats(num: number): void;
  setEngine(engine: EngineTypes): void;
  setGPS(): void;
}
