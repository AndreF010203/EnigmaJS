import { RotorConfig } from "../rotorConfig";

class RotorV implements RotorConfig {
  wiring = 'VZBRGITYUPSDNHLXAWMJQOFECK';
  notch = 'Z';
  name = 'Rotor V';
}

export const rotorV = new RotorV();