import { DebuggerService } from "../services/debugger.service";
import { Rotor } from "./rotors/rotor";
import { Reflector } from "./stators/reflector";

export class Enigma {
  rotors: Rotor[];
  reflector: Reflector;
  staticETW: Reflector;

  debuggerSvc: DebuggerService;

  setup(rotors: Rotor[], reflector: Reflector, staticETW?: Reflector) {
    this.rotors = rotors;
    this.reflector = reflector;
    this.staticETW = staticETW;
  }

  addDebugger(debuggerSvc: DebuggerService) {
    this.debuggerSvc = debuggerSvc;
    this.rotors.forEach(r => r.addDebugger(debuggerSvc));
    this.reflector.addDebugger(debuggerSvc);
  }

  runString(s: string) {
    return s.toUpperCase().split('').map(c => c.match(/\w/) ? this.runLetter(c) : c).join('');
  }

  runLetter(x: string) {
    this.debuggerSvc?.log("------------------------------")
    this.turnRotors();
    return this.runReverse(this.runReflector(this.runStraight(this.runETW(x))));
  }

  turnRotors(i = 0) {
    if (this.rotors[i].turn()) {
      this.turnRotors(i + 1);
    }
  }

  runStraight(x: string): string {
    return this.rotors.reduce((output, rotor) => rotor.transmitStraight(output), x);
  }

  runReverse(x: string): string {
    return this.rotors.slice().reverse().reduce((output, rotor) => rotor.transmitReverse(output), x);
  }

  runReflector(x: string): string {
    return this.reflector.transmit(x);
  }

  runETW(x: string): string {
    return this.staticETW ? this.staticETW.transmit(x) : x;
  }
}