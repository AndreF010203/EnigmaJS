import { RotorConfig } from "../../rotorConfig";

class RotorIIZ implements RotorConfig {
  wiring = '5841097632';
  notch = '9';
  name = 'Rotor II';
}

export const rotorIIZ = new RotorIIZ();