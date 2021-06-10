import { DebuggerService } from "src/app/services/debugger.service";
import { Alphabet } from "../alphabet";
import { RotorConfig } from "./rotorConfig";

export class Rotor {
  // constants
  wiring: string;
  notch: string;
  ringShift: number;
  name: string;

  // dynamic values
  step: number;

  debuggerSvc: DebuggerService;

  constructor(config: RotorConfig, ringShift = 0, step = 0) {
    this.wiring = config.wiring;
    this.notch = config.notch;
    this.name = config.name;

    this.step = step;
    this.ringShift = ringShift;

    if(ringShift > 0) {
      this.alignRingShift();
    }
  }

  setRingShift(shift: number) {
    this.ringShift = shift;
  }

  setStep(step: number) {
    this.step = step;
  }

  addDebugger(debuggerSvc: DebuggerService) {
    this.debuggerSvc = debuggerSvc;
  }

  transmitStraight(x: string) {
    this.debuggerSvc?.log(this.name + " with step " + this.step);

    const inputMapping = Alphabet.index(x) + this.step;
    const wiring = this.wiring.charAt(Alphabet.normalize(inputMapping));
    const outputMapping =  Alphabet.charAt(Alphabet.index(wiring) - this.step);

    this.debuggerSvc?.log("&nbsp;&nbsp;&nbsp;&nbsp;Input letter: " + x + ", Output letter: " + outputMapping); 
    this.debuggerSvc?.log("&nbsp;&nbsp;&nbsp;&nbsp;Full wiring: " +
      x + " &rarr; " + Alphabet.charAt(inputMapping) +" &rArr; " + wiring + " &rarr; " + outputMapping); 

    return outputMapping;
  };

  transmitReverse(x: string) {
    this.debuggerSvc?.log(this.name + " with step " + this.step);

    const inputMapping = Alphabet.charAt(Alphabet.index(x) + this.step);
    const wiring = this.wiring.indexOf(inputMapping);
    const outputMapping =  Alphabet.charAt(wiring - this.step);

    this.debuggerSvc?.log("&nbsp;&nbsp;&nbsp;&nbsp;Input letter: " + x + ", Output letter: " + outputMapping); 
    this.debuggerSvc?.log("&nbsp;&nbsp;&nbsp;&nbsp;Full wiring: " +
      x + " &rarr; " + inputMapping +" &rArr; " + Alphabet.charAt(wiring) + " &rarr; " + outputMapping); 
    return outputMapping;
  }

  turn(): boolean {
    const notchStep = this.notch.includes(Alphabet.charAt(this.step));
    this.step = Alphabet.normalize(this.step + 1);
    if(notchStep) {
      this.debuggerSvc?.log(this.name + " hit notch point");
    }
    return notchStep;
  }

  alignRingShift(): void {
    const intervals = this.wiring.split('').map((c, i) => {
      return Alphabet.normalize(Alphabet.index(c) - i);
    });
    const ringIntervals = intervals.slice(intervals.length - this.ringShift)
      .concat(intervals.slice(0, intervals.length - this.ringShift));
    
    this.wiring = Alphabet.list.split('').map((c, i) => {
      return Alphabet.charAt(i + ringIntervals[i]);
    }).join('');
  }
}