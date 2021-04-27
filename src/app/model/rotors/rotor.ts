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

  transmitStraight(x: string) {
    console.log(this.name + " in: " + x);
    console.log("step: " + this.step);

    const inputMapping = Alphabet.index(x) + this.step;
    console.log("mapped as: " + Alphabet.charAt(inputMapping));

    const wiring = this.wiring.charAt(Alphabet.normalize(inputMapping));

    console.log("wiring: " + wiring); 

    const outputMapping =  Alphabet.charAt(Alphabet.index(wiring) - this.step);

    console.log("out: " + outputMapping);
    return outputMapping;
  };

  transmitReverse(x: string) {
    console.log(this.name + " in: " + x);

    const input = Alphabet.index(x) + this.step;

    console.log("mapped as: " + Alphabet.charAt(input));

    const wiring = this.wiring.indexOf(Alphabet.charAt(input));

    console.log("wiring: " + this.wiring.charAt(wiring)); 

    const outputMapping =  Alphabet.charAt(wiring - this.step);

    console.log("out: " + outputMapping);
    return outputMapping;
  }

  turn(): boolean {
    const notchStep = this.notch.includes(Alphabet.charAt(this.step));
    this.step = Alphabet.normalize(this.step + 1);
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