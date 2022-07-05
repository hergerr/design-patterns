import { Command } from "../core/Command";
import { Light } from "../devices/Light";

export class CommandTurnOnLight implements Command {
  constructor(private light: Light) {}
  execute(): void {
    this.light.turnOn();
  }
}
