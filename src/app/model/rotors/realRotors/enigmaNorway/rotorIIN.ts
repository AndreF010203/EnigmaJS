import { RotorConfig } from "../../rotorConfig";

class RotorIIN implements RotorConfig {
  wiring = 'GJLPUBSWEMCTQVHXAOFZDRKYNI';
  notch = 'Y';
  name = 'Rotor II';
}

export const rotorIIN = new RotorIIN();