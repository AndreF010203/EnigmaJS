import { RotorConfig } from "../rotorConfig";

class RotorVII implements RotorConfig {
  wiring = 'NZJHGRCXMYSWBOUFAIVLPEKQDT';
  notch = 'ZM';
  name = 'Rotor VII';
}

export const rotorVII = new RotorVII();