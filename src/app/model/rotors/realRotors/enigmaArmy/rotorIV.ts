import { RotorConfig } from "../../rotorConfig";

class RotorIV implements RotorConfig {
  wiring = 'ESOVPZJAYQUIRHXLNFTGKDCMWB';
  notch = 'J';
  name = 'Rotor IV';
}

export const rotorIV = new RotorIV();