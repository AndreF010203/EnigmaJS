import { RotorConfig } from "../../rotorConfig";

class RotorIVN implements RotorConfig {
  wiring = 'FGZJMVXEPBWSHQTLIUDYKCNRAO';
  notch = 'Y';
  name = 'Rotor IV';
}

export const rotorIVN = new RotorIVN();