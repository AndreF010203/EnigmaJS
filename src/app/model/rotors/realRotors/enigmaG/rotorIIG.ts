import { RotorConfig } from "../../rotorConfig";

class RotorIIG implements RotorConfig {
  wiring = 'SLVGBTFXJQOHEWIRZYAMKPCNDU';
  notch = 'STVYZACDFGHKMNQ';
  name = 'Rotor II';
}

export const rotorIIG = new RotorIIG();