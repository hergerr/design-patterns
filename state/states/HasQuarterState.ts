import { GumballMachine } from "../context/GumballMachine";
import { State } from "../core/State";

export class HasQuarterState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }
  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  turnCrank(): void {
    console.log("You turned...");
    const winner = Math.floor(Math.random() * 10);
    if (winner === 10) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }
  dispense(): void {
    console.log("No gumball dispensed");
  }

  toString(): string {
    return "waiting for turn of crank";
  }
}
