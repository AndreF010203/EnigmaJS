import { Alphabet } from "../alphabet";
import { ReflectorConfig } from "./reflectorConfig";

export class Reflector {
  wiring: string;

  constructor(config: ReflectorConfig) {
    this.wiring = config.wiring;
  }

  transmit(x: string) {
    console.log("reflector")
    return this.wiring.charAt(Alphabet.index(x));
  };
}