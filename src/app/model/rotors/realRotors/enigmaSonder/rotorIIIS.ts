import { RotorConfig } from "../../rotorConfig";

class RotorIIIS implements RotorConfig {
  wiring = 'TZHXMBSIPNURJFDKEQVCWGLAOY';
  notch = 'D';
  name = 'Rotor III';
}

export const rotorIIIS = new RotorIIIS();