import { RotorConfig } from "../../rotorConfig";

class RotorIIID implements RotorConfig {
  wiring = 'CJGDPSHKTURAWZXFMYNQOBVLIE';
  notch = 'M';
  name = 'Rotor II';
}

export const rotorIIID = new RotorIIID();