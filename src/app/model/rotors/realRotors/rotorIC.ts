import { RotorConfig } from "../rotorConfig";

class RotorIIC implements RotorConfig {
  wiring = 'HQZGPJTMOBLNCIFDYAWVEUSRKX';
  notch = '';
  name = 'Rotor IIC';
}

export const rotorIIC = new RotorIIC();