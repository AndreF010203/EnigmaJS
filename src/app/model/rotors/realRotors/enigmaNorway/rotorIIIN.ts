import { RotorConfig } from "../../rotorConfig";

class RotorIIIN implements RotorConfig {
  wiring = 'JWFMHNBPUSDYTIXVZGRQLAOEKC';
  notch = 'Y';
  name = 'Rotor III';
}

export const rotorIIIN = new RotorIIIN();