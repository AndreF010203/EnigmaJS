import { RotorConfig } from "../../rotorConfig";

class RotorID implements RotorConfig {
  wiring = 'LPGSZMHAEOQKVXRFYBUTNICJDW';
  notch = 'G';
  name = 'Rotor I';
}

export const rotorID = new RotorID();