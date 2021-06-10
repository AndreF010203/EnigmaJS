import { DebuggerService } from "src/app/services/debugger.service";
import { Alphabet } from "../alphabet";
import { ReflectorConfig } from "./reflectorConfig";

export class Reflector {
  wiring: string;
  name: string;

  debuggerSvc: DebuggerService;

  constructor(config: ReflectorConfig) {
    this.wiring = config.wiring;
    this.name = config.name;
  }

  transmit(x: string) {
    const output = this.wiring.charAt(Alphabet.index(x));
    this.debuggerSvc?.log("Reflector " + this.name);
    this.debuggerSvc?.log("&nbsp;&nbsp;&nbsp;&nbsp;Full wiring: " +
    x + "&rArr; " + output); 

    return output;
  };

  addDebugger(dbgSvc: DebuggerService) {
    this.debuggerSvc = dbgSvc;
  }
}