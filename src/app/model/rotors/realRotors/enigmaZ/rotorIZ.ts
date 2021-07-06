import { RotorConfig } from "../../rotorConfig";

class RotorIZ implements RotorConfig {
  wiring = '6418270359';
  notch = '9';
  name = 'Rotor I';
}

export const rotorIZ = new RotorIZ();