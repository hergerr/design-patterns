import { Command } from "./Command";

export class MiniPilot {
  private slot: Command;

  constructor() {}

  setCommand(command: Command): void {
    this.slot = command;
  }

  buttonWasPushed() {
    this.slot.execute();
  }
}
