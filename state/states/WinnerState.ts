import { GumballMachine } from "../context/GumballMachine";
import { State } from "../core/State";

export class WinnerState implements State {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a Gumball");
  }
  ejectQuarter(): void {
    console.log("Please wait, we're already giving you a Gumball");
  }
  turnCrank(): void {
    console.log("Turning again doesn't get you another gumball!");
  }
  dispense(): void {
    console.log("YOU'RE A WINNER! You get two gumballs for your quarter");
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() == 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log("Oops, out of gumballs!");
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }

  toString(): string {
    return "despensing two gumballs for your quarter, because YOU'RE A WINNER!";
  }
}
