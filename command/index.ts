import { CommandTurnOnLight } from "./commands/CommandTurnOnLight";
import { MiniPilot } from "./core/MiniPilot";
import { Light } from "./devices/Light";

let pilot: MiniPilot = new MiniPilot();
let light: Light = new Light();
let turnOnLightCommand = new CommandTurnOnLight(light);

pilot.setCommand(turnOnLightCommand);
pilot.buttonWasPushed();
