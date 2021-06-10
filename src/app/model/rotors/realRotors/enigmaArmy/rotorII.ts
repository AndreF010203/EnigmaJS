import { RotorConfig } from "../../rotorConfig";

class RotorII implements RotorConfig {
  wiring = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
  notch = 'E';
  name = 'Rotor II';
}

export const rotorII = new RotorII();