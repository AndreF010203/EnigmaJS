import { RotorConfig } from "../../rotorConfig";

class RotorIIIG implements RotorConfig {
  wiring = 'CJGDPSHKTURAWZXFMYNQOBVLIE';
  notch = 'UWXAEFHKMNR';
  name = 'Rotor III';
}

export const rotorIIIG = new RotorIIIG();