import { Rotor } from "./rotors/rotor";
import { Reflector } from "./stators/reflector";

export class Enigma {
  rotors: Rotor[];
  reflector: Reflector;

  setup(rotors: Rotor[], reflector: Reflector) {
    this.rotors = rotors;
    this.reflector = reflector;
  }

  runString(s: string) {
    return s.toUpperCase().split('').map(c => c.match(/\w/) ? this.runLetter(c) : c).join('');
  }

  runLetter(x: string) {
    this.turnRotors();
    return this.runReverse(this.runReflector(this.runStraight(x)));
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
}