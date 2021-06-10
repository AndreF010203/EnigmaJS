import { RotorConfig } from "../rotorConfig";

class RotorIC implements RotorConfig {
  wiring = 'DMTWSILRUYQNKFEJCAZBPGXOHV';
  notch = '';
  name = 'Rotor IC';
}

export const rotorIC = new RotorIC();