import { GumballMachine } from "../context/GumballMachine";
import { State } from "../core/State";

export class SoldOutState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert a quarter, the machine is sold out");
  }

  ejectQuarter(): void {
    console.log("You can't eject, you haven't inserted a quarter yet");
  }

  turnCrank(): void {
    console.log("You turned, but there are no gumballs");
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  toString(): string {
    return "sold out";
  }
}
