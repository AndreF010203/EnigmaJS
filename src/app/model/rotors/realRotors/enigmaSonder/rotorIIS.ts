import { RotorConfig } from "../../rotorConfig";

class RotorIIS implements RotorConfig {
  wiring = 'UEMOATQLSHPKCYFWJZBGVXINDR';
  notch = 'M';
  name = 'Rotor II';
}

export const rotorIIS = new RotorIIS();