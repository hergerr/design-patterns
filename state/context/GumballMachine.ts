import { State } from "../core/State";
import { HasQuarterState } from "../states/HasQuarterState";
import { NoQuarterState } from "../states/NoQuarterState";
import { SoldOutState } from "../states/SoldOutState";
import { SoldState } from "../states/SoldState";
import { WinnerState } from "../states/WinnerState";

export class GumballMachine {
  private soldOutState: SoldOutState;
  private noQuarterState: NoQuarterState;
  private hasQuarterState: HasQuarterState;
  private winnerState: WinnerState;
  private soldState: SoldState;
  private count: number = 0;
  private state: State;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.winnerState = new WinnerState(this);
    this.soldState = new SoldState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    }
  }

  insertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State): void {
    this.state = state;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count !== 0) this.count--;
  }

  getCount(): number {
    return this.count;
  }

  getSoldOutState(): State {
    return this.soldOutState;
  }

  getNoQuarterState(): State {
    return this.noQuarterState;
  }

  getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  getWinnerState(): State {
    return this.winnerState;
  }

  getSoldState(): State {
    return this.soldState;
  }

  toString(): string {
    let response = "";
    response += "\nMighty Gumball, Inc.";
    response += "\nTS-enabled Standing Gumball Model #2004";
    response += "\nInventory: " + this.count + " gumball";
    if (this.count != 1) {
      console.log("s");
    }
    response += "\n";
    response += "Machine is " + this.state + "\n";

    return response;
  }
}
