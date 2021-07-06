import { RotorConfig } from "../../rotorConfig";

class RotorIG implements RotorConfig {
  wiring = 'LPGSZMHAEOQKVXRFYBUTNICJDW';
  notch = 'SUVWZABCEFGIKLOPQ';
  name = 'Rotor I';
}

export const rotorIG = new RotorIG();