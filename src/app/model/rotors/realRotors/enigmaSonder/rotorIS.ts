import { RotorConfig } from "../../rotorConfig";

class RotorIS implements RotorConfig {
  wiring = 'VEOSIRZUJDQCKGWYPNXAFLTHMB';
  notch = 'Y';
  name = 'Rotor I';
}

export const rotorIS = new RotorIS();