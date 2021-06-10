import { RotorConfig } from "../../rotorConfig";

class RotorI implements RotorConfig {
  wiring = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ';
  notch = 'Q';
  name = 'Rotor I';
}

export const rotorI = new RotorI();