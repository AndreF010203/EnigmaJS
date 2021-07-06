import { RotorConfig } from "../../rotorConfig";

class RotorIIIZ implements RotorConfig {
  wiring = '3581620794';
  notch = '9';
  name = 'Rotor III';
}

export const rotorIIIZ = new RotorIIIZ();