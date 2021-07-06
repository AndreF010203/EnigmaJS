import { RotorConfig } from "../../rotorConfig";

class RotorIIID implements RotorConfig {
  wiring = 'CJGDPSHKTURAWZXFMYNQOBVLIE';
  notch = 'M';
  name = 'Rotor III';
}

export const rotorIIID = new RotorIIID();