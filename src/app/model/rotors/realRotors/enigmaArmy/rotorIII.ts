import { RotorConfig } from "../../rotorConfig";

class RotorIII implements RotorConfig {
  wiring = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';
  notch = 'V';
  name = 'Rotor III';
}

export const rotorIII = new RotorIII();