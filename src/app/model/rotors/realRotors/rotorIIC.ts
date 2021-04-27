import { RotorConfig } from "../rotorConfig";

class RotorIIIC implements RotorConfig {
  wiring = 'UQNTLSZFMREHDPXKIBVYGJCWOA';
  notch = '';
  name = 'Rotor IIIC';
}

export const rotorIIIC = new RotorIIIC();